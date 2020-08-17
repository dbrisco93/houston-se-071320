class Book < ApplicationRecord
  belongs_to :author

  validates :title, :desc, :author_id, presence: true
  validates :title, uniqueness: true

  # validate :check_if_desc_exist
  #
  # def check_if_desc_exist
  #   if self.desc.nil?
  #     self.errors.add(:desc, "Needs a value")
  #   end
  # end

end
