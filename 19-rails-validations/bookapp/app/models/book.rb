class Book < ApplicationRecord
  belongs_to :author

  validates :title, { presence: true, uniqueness: true }

  # def check_title_and_author
  #   if self.title && self.author
  #     errors.add('This book exists with the same author')
  #   end
  # end

end
