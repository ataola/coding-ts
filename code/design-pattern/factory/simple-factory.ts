// 本故事纯属虚构，仅做代码演示
function SimpleFactory(name: string, type: string): Pig {
  let describe;
  switch (type) {
    case '长白猪':
      describe = '美容养颜';
      break;
    case '大白猪':
      describe = '吃了不胖';
      break;
    case '杜洛克猪':
      describe = '可以当宠物';
      break;
    default:
      describe = '可以种田';
      break;
  }
  return new Pig(name, type, describe);
}

class Pig {
  name: string;
  type: string;
  describe: string;

  constructor(name: string, type: string, describe: string) {
    this.name = name;
    this.type = type;
    this.describe = describe;
  }
}
