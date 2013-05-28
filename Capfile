load 'deploy'

set :application, 'blog.richardcalahan.com'
set :repository, 'https://richardcalahan:willywonka1@github.com/richardcalahan/blog.richardcalahan.com.git'
set :scm, :git
set :deploy_to, "/var/www/#{application}"

set :user, 'nginx'

server 'harrison.richardcalahan.com', :app, :web, :db, :primary => true
