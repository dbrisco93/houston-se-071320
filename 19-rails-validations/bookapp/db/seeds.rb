# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.destroy_all
Book.destroy_all

auth1 = Author.create(name: 'John Doe')
auth2 = Author.create(name: 'Ted Doe')
auth3 = Author.create(name: 'Scott Doe')

book1 = Book.create(title: 'Johns Book', desc: 'Some Desc', author_id: auth1.id)
book2 = Book.create(title: 'Teds Book 2', desc: 'Some Desc 2', author_id: auth2.id)
book3 = Book.create(title: 'Scotts Book', desc: 'Some Desc 3', author_id: auth3.id)
book4 = Book.create(title: 'Scotts Book 3', desc: 'Some Desc 4', author_id: auth3.id)
