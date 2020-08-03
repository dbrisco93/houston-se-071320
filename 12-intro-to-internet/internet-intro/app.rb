class App
  def call(environment_hash)

    status_code = 200
    header = {}
    req = Rack::Request::new(environment_hash)

    if req.path.match('/home')
      body = ["<h1>Welcome Home!</h1>"]
      return [status_code, header, body]
    else
      body = ["404 Page not found.."]
      return [404, header, body]
    end

  end
end
