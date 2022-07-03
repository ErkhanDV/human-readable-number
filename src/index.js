module.exports = function toReadable (number) {
  let humanReadebleNumber = [];
  const numbers = [
    ['zero', 'ten'],
    ['one', 'eleven'],
    ['two', 'twelve', 'twenty'],
    ['three', 'thirteen', 'thirty'],
    ['four', 'fourteen', 'forty'],
    ['five', 'fifteen', 'fifty'],
    ['six', 'sixty', 'sixteen'],
    ['seven', 'seventeen', 'seventy'],
    ['eight', 'eighty', 'eighteen'],
    ['nine', 'nineteen', 'ninety']
  ];
  const numStr = number.toString();
  const mass = numStr.length;
  console.log(mass);

  const hundredths = () => {
    humanReadebleNumber.push(`${numbers[Number(numStr[0])][0]} hundred`);
  };
  const dozens = () => {
    if (numStr[mass - 2] == 1) {
      humanReadebleNumber.push(`${numbers[numStr[mass - 1]][1]}`);
    } else {
      humanReadebleNumber.push(`${numbers[numStr[mass - 2]][2]}`);
      prime();
    }
  }
  const prime = () => {
    humanReadebleNumber.push(numStr[mass - 1] == 0 ? '' : `${numbers[numStr[mass - 1]][0]}`);
  }
  if (number == 0) {
    return 'zero';
  }
  if (mass == 3) {
    hundredths();
    dozens();
  }
  if (mass == 2) {
    dozens();
  }
  if (mass == 1) {
    prime();
  }
  return humanReadebleNumber.join(' ');
}
