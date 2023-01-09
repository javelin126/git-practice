let num = 0;
for (let i=1; i<51; i++) {
  suji = num + i;

  if(suji %4 == 0){
    console.log('4で割れる数字です。' + suji)
  }
  if(suji % 10 == 0){
    console.log('今' + suji + '回ループしました。')
  }
  // if(suji == 4){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 8){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 10){
  //   console.log('今' + suji + '回ループしました。');
  // }else if(suji == 12){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 16){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 20){
  //   console.log('今' + suji + '回ループしました。');
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 24){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 28){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 30){
  //   console.log('今' + suji + '回ループしました。');
  // }else if(suji == 32){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 36){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 40){
  //   console.log('今' + suji + '回ループしました。');
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 44){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 48){
  //   console.log('4で割れる数字です。' + suji);
  // }else if(suji == 50){
  //   alert('50回カウントが終わりました。');
  // }
}