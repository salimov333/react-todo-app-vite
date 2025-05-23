#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VITE_DEPLOY_ENV: $VITE_DEPLOY_ENV"

if [[ "$VERCEL_ENV" == "production"  && "$VERCEL_GIT_COMMIT_REF" == "main"  ]]; then
    # Proceed with the build
    echo "✅ - Build can proceed"
    exit 1

else
    # Don't build
    echo "🛑 - Build cancelled"
    exit 0
fi
