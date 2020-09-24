Book.destroy_all
Author.destroy_all

a1 = Author.create({
  username: "Shay Youngblood",
  password: "123"
})

a2 = Author.create({
    username: "Tomi Adeyemi",
    password: "1234"
})

Book.create({
  title: "Soul Kiss",
  img: "https://images-na.ssl-images-amazon.com/images/I/31AYTZWPCPL._SX309_BO1,204,203,200_.jpg",
  author_id: a1.id
})

Book.create({
  "img": "https://images-na.ssl-images-amazon.com/images/I/41oS2tKs2TL._SX324_BO1,204,203,200_.jpg",
  "title": "On Beauty",
  author_id: a2.id
})

# Book.create({
#   "title": "Children of Blood & Bone",
#   "author": "Tomi Adeyemi",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/61SB-c0mHGL._SX329_BO1,204,203,200_.jpg"
# })
#
# Book.create({
#   "author": "Zadie Smith",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/41oS2tKs2TL._SX324_BO1,204,203,200_.jpg",
#   "title": "On Beauty"
# })
#
# Book.create({
#   "author": "Zadie Smith",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/51Vfwe7%2BJ5L._SX324_BO1,204,203,200_.jpg",
#   "title": "Swing Time"
# })
#
# Book.create({
#   "author": "Zadie Smith",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/517BqHtwIKL._SX324_BO1,204,203,200_.jpg",
#   "title": "Feel Free"
# })
#
# Book.create({
#   "author": "Maya Angelou",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/41SKsBaGXRL._SX301_BO1,204,203,200_.jpg",
#   "title": "I Know Why the Caged Bird Sings"
# })
#
# Book.create({
#   "author": "Toni Morrison ",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/413-xT0izBL._SX322_BO1,204,203,200_.jpg",
#   "title": "The Bluest Eye"
# })
#
# Book.create({
#   "title": "War And Peace",
#   "author": "Leo Tolstoy",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SX330_BO1,204,203,200_.jpg"
# })
#
# Book.create({
#   "title": "Pride & Prejudice",
#   "author": "Jane Austen ",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/514uGV1Y9kL._SX322_BO1,204,203,200_.jpg"
# })
#
# Book.create({
#   "title": "Green Eggs & Ham",
#   "author": "Dr. Seuss",
#   "img": "https://images-na.ssl-images-amazon.com/images/I/61akeHxE0OL._SX258_BO1,204,203,200_.jpg"
# })
