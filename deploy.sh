#!/usr/bin/env bash
set -euo pipefail
cd /opt/vsosh_site
git fetch --all
git reset --hard origin/main
git clean -fd
destination=/var/www/vsosh_site
/usr/bin/hugo -d "$destination"

# Только согласованные промежуточные файлы, после успешной сборки.
# Если файл вернули в static, сохраняем его и на сервере.
for file in \
  'downloads/answers_11.docx' \
  'downloads/answers_9.docx' \
  'downloads/blank_ruler_prob5.svg' \
  'downloads/jga25-370b.png' \
  'downloads/methodology.docx' \
  'downloads/problems_11.docx' \
  'downloads/problems_11_PT.docx' \
  'downloads/problems_9.docx' \
  'downloads/problems_9_PT.docx' \
  'downloads/problems_etz.docx' \
  'downloads/ruler.png' \
  'downloads/Требования к РЭ ВсОШ 2025-26 информатика.pdf' \
  'img/baner_600x500.pdf' \
  'img/comics.jpg' \
  'img/etz_short.pdf' \
  'img/im_resize.py' \
  'img/pole_a4.pdf'
do
  if [ ! -e "static/$file" ]; then
    rm -f -- "$destination/$file"
  fi
done

