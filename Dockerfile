FROM ruby:3.3

RUN apt-get update && apt-get install -y nodejs && apt-get clean
WORKDIR /srv/jekyll
COPY Gemfile ./
RUN gem install bundler && bundle install

# Copy the rest of your site (except for .dockerignore)
COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
