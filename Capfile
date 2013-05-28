require 'rvm/capistrano'
load 'deploy'

set :application, 'blog.richardcalahan.com'
set :repository,  'https://richardcalahan:willywonka1@github.com/richardcalahan/blog.richardcalahan.com.git'
set :scm,         :git
set :deploy_to,   "/var/www/#{application}"

set :user,        'nginx'
set :use_sudo,    false
set :rvm_type,    :system
set :rvm_path,    '/usr/local/rvm'

server 'harrison.richardcalahan.com', :app, :web, :db, :primary => true

namespace :jekyll do
  task :build do 
    run "cd #{deploy_to}/current && jekyll build"
  end
end
