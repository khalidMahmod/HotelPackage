require 'faker'

10.times do
  Package.create(
      hotel_name: Faker::Company.name,
      price: Faker::Number.between(from: 10, to: 1000),
      duration: {'days': Faker::Number.between(from: 2, to: 6), 'nights': Faker::Number.between(from: 1, to: 5)},
      description: Faker::Lorem.paragraph(sentence_count: 2),
      expiry_date: Faker::Date.between(from: 1.month.from_now, to: 3.months.from_now),
  )
end