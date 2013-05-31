require 'rvm/capistrano'

load 'deploy'

set :application, 'richardcalahan.com'
set :repository,  'https://github.com/richardcalahan/richardcalahan.com.git'
set :scm,         :git
set :deploy_to,   "/var/www/#{application}"

set :user,        'nginx'
set :use_sudo,    false
set :rvm_type,    :system
set :rvm_path,    '/usr/local/rvm'

server 'harrison.richardcalahan.com', :app, :web, :db, :primary => true

namespace :deploy do 
  [:start, :stop, :restart, :finalize_update].each do |t|
    desc "#{t} task is a no-op with jekyll"
    task t, :roles => :app do; end
  end
end

namespace :jekyll do
  task :build do 
    run "cd #{deploy_to}/current && jekyll build"
  end
end

after 'deploy:create_symlink', 'jekyll:build'
