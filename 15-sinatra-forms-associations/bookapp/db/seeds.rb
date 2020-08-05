Author.destroy_all
Book.destroy_all

a1 = Author.create(name: 'J K Crawling')
a2 = Author.create(name: 'GRRIM')

b1 = Book.create(title: 'Smarry Shpotter', desc: 'Not for kids', author_id: a1.id)
b2 = Book.create(title: 'Game of troubles', desc: 'Def not for kids', author_id: a2.id)
b3 = Book.create(title: 'Game of troubles 2', desc: 'Def not for kids 2', author_id: a2.id)
