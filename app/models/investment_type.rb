class InvestmentType < ActiveRecord::Base
  has_many :projects
  validates_presence_of :name, :order
  validates_uniqueness_of :name, :order

  def as_json(options={})
  	if options != nil and options[:as_array]
  		name
  	else
  	{
  		:name => name,
  		:order => order
  	}
  	end
  end
end
