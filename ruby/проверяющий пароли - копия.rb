while 1==1
File.open('C:\Users\Кока\Pictures\скачанные изображения\210,321,2,1\123.txt','r') do |nf|
print('вводи пароль')
r=gets.chomp()
cmd1=(nf.read().include? r)
if cmd1 == true
puts('твой пароль есть в базе данных')
end
if cmd1 == false
puts('твоего пароля нет в базе данных')
end
end
end
