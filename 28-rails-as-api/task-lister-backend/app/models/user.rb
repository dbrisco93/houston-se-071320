class User < ApplicationRecord
  has_many :tasks

  def user_profile
    self.as_json(
      :include => :tasks,
      :except => [
        :updated_at,
        :created_at
        ]
    )
  end
end
