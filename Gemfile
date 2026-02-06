# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
source 'https://rubygems.org'
ruby '3.2.3'

gem 'middleman', '~> 4.5'

# Live-reloading plugin
# gem 'middleman-livereload', '~> 3.1.0'
gem 'middleman-livereload', '~> 3.4', '>= 3.4.6'
gem 'middleman-gh-pages'

gem 'middleman-meta-tags'
gem 'middleman-search_engine_sitemap'
gem 'neat', '~> 1.7.2'

gem 'middleman-dotenv', '~> 2.0'
# gem 'middleman-deploy', '~> 1.0' # Incompatible with Middleman 4+
gem 'haml', '~> 6.0'
gem 'puma'
gem 'net-ftp' # Required for Ruby 3+

# security updates
gem 'ffi', '>= 1.15.0'
gem 'sprockets', '>= 3.7.2'


group :development, :test do
  gem 'pry'
  gem 'pry-byebug'
  gem 'rspec'
  gem 'sass'
  gem 'timecop'
end
