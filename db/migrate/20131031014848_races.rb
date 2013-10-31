class Races < ActiveRecord::Migration
  def up
    create_table :races do |t|
      t.string :name
      t.text :description
      t.datetime :race_date
      t.has_attached_file :image
    end
  end

  def down
    drop_table :races
  end
end
