class BasicORM

  def self.table_name
    "#{self.name.downcase}s"
  end

  def self.all
    query = <<-SQL
      select * from #{self.table_name}
    SQL
    results = DB[:conn].execute(query)
    results.map { |record| self.new(record) }
  end

  def self.find_by
  end

  def self.find
  end

end
