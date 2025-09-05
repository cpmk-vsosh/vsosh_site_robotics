set -euo pipefail
cd /opt/vsosh_site
git fetch --all
git reset --hard origin/main
/bin/hugo -d /var/www/vsosh_site

