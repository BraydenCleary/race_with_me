class Race < ActiveRecord::Base
  attr_accessible :name, :description, :race_date, :race_type
end
