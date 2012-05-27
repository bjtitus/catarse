#!/bin/bash

PATH=/usr/bin:/bin:/usr/sbin:/sbin:/opt/vagrant_ruby/bin

apt-get update
echo "##===== Installing Build-Essentials (for make & patch) =====##"
apt-get install build-essential -y
echo "##===== Installing CURL =====##"
apt-get install curl -y
echo "##===== Installing SQLite =====##"
apt-get install libsqlite3-dev -y
echo "##===== Installing Nokogiri Reqs =====##"
# nokogiri requirements
apt-get install ruby1.8-dev ruby1.8 ri1.8 rdoc1.8 irb1.8 -y
apt-get install libxslt-dev libxml2-dev -y
echo "##===== Installing pq Reqs =====##"
apt-get install libpq-dev -y
echo "##===== Installing Git =====##"
apt-get install git-core -y
echo "##===== Installing RVM =====##"
curl -L get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
echo "##===== Installing Ruby (v 1.9.2) =====##"
rvm install 1.9.2

echo "##===== Installing PostgreSQL =====##"
apt-get install postgresql -y
dbname="catarse_development"
username="catarse"
password="password"
echo "##===== Running PostgreSQL Setup =====##"
su - postgres -c psql <<EOF
CREATE USER $username WITH PASSWORD '$password'; CREATE DATABASE $dbname OWNER $username
EOF

echo "##===== Installing Rails =====##"
gem install rails
echo "##===== Installing Unicorn =====##"
gem install unicorn
echo "##===== Switching To Directory =====##"
cd /vagrant/
echo "##===== Installing Gems =====##"
bundle install
echo "##===== Migrating Database =====##"
bundle exec rake db:migrate
echo "##===== Starting Unicorn Server =====##"
unicorn -D -p 3000
echo "#######++ DONE!!! You may now visit http://localhost:3000 in your browser of choice ++#######"