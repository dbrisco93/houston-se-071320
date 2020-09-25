class ApplicationController < ActionController::API

  def current_author
    token = request.headers['Auth-Key']
    begin
      author_id = JWT.decode(token,ENV['SUPER_SECRET_KEY'])[0]["author_id"]
      @author = Author.find_by(id: author_id)
    rescue
      nil
    end
  end

  def authenticate!
    unless current_author
      nil
    end
  end

end
