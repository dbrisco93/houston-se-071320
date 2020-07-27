require 'pry'
require 'rest-client'
require 'json'

def welcome_user
  puts "Welcome to my Amazon Clone 🛑"
end

def get_input
  puts "What books are you looking for?"
  gets.chomp
end

def get_books(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  JSON.parse(response.body)["items"]
end

def show_results(books)
  books.each do |book|
    title = book["volumeInfo"]["title"]
    # puts "========================"
    # puts title
    # puts "========================"
    Book.create(title: title)
  end
end

# Book.find_by(title: '')

def run
  welcome_user
  search_term = get_input
  books = get_books(search_term)
  show_results(books)
end

run
