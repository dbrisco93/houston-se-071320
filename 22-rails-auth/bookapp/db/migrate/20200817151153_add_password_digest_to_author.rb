class AddPasswordDigestToAuthor < ActiveRecord::Migration[6.0]
  def change
    add_column :authors, :password_digest, :text
    remove_column :authors, :password
  end
end
