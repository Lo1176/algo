def count_occurence(array)
  count = {}

  # comparer les nb

  array.each do |number|
    if count[number].nil?
      count[number] = 1
    else
      count[number] += 1
    end
  end

  count
end

puts count_occurence([1, 2, 3, 2, 2, 4, 5, 6, 2])

# [10] pry(main)> a.each_with_index(hash.new(0)) { |e, a| a[e] += 1 }

# si count > 1 => afficher n

def first_recurringv1(array)
  count = {}

  array.each do |number|
    if count[number].nil?
      count[number] = true
    else
      return number
    end
  end

  nil
end

p first_recurringv1([2, -1, 1, 1, -1]) # => 1

def first_recurringv2(array)
  hash = count(array)

  array.each do |number|
    return number if hash[number] > 1
  end

  nil
end

p first_recurringv2([1, 2, 3, 4, 5])
p first_recurringv2([2, -1, 1, 1, -1])
