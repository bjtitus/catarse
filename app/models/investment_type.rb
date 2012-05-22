class InvestmentType < ActiveRecord::Base
  has_many :projects
  validates_presence_of :name, :order
  validates_uniqueness_of :name, :order
end
