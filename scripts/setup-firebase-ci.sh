#!/usr/bin/env bash
# One-time setup: create a deploy service account and add it to GitHub Actions.
# Prerequisites: gcloud + gh CLI logged in, Firebase project "quontriz" selected.
set -euo pipefail

PROJECT_ID="quontriz"
SA_NAME="github-hosting-deploy"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
KEY_FILE="$(mktemp -t firebase-sa-XXXXXX.json)"
REPO="premkumarkota/Quontriz_website_react"

cleanup() { rm -f "$KEY_FILE"; }
trap cleanup EXIT

echo "→ Using GCP project: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}"

echo "→ Ensuring service account exists..."
if ! gcloud iam service-accounts describe "${SA_EMAIL}" >/dev/null 2>&1; then
  gcloud iam service-accounts create "${SA_NAME}" \
    --display-name="GitHub Actions Firebase Hosting Deploy"
fi

echo "→ Granting Firebase Hosting Admin..."
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/firebasehosting.admin" \
  --condition=None >/dev/null

gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/iam.serviceAccountTokenCreator" \
  --condition=None >/dev/null

gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/firebase.viewer" \
  --condition=None >/dev/null

echo "→ Creating JSON key..."
gcloud iam service-accounts keys create "${KEY_FILE}" \
  --iam-account="${SA_EMAIL}"

echo "→ Adding GitHub secret FIREBASE_SERVICE_ACCOUNT on ${REPO}..."
gh secret set FIREBASE_SERVICE_ACCOUNT \
  --repo "${REPO}" \
  --body "$(cat "${KEY_FILE}")"

echo ""
echo "Done. Next:"
echo "  1) Commit & push CI files to the dev branch"
echo "  2) Open https://github.com/${REPO}/actions"
echo "  3) Site: https://${PROJECT_ID}.web.app"
