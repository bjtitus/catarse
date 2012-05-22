class AddInvestmentScaleToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :investment_scale, :integer
  end

  def self.down
    remove_column :projects, :investment_scale
  end
end
