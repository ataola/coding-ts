// 定义操作系统相关接口
interface OS {
  // 控制发动机引擎
  controlEngine(): void;
}

// 定义发动机引擎相关接口
interface Engine {
  // 提供相关操作接口
  operateAPI(): void;
}

// 定义飞机厂相关接口，其他啥也不干
interface AirplaneFactory {
  // 创建操作系统
  createOS(): OS;
  // 创建发动机引擎
  createEngine(): Engine;
}

// VxWorks操作系统
class VxWorks implements OS {
  controlEngine(): void {
    console.log('这里是VxWorks操作系统，详情请咨询：http://www.windriver.com/products/vxworks/');
  }
}

// Integrity-178B操作系统
class Integrity178B implements OS {
  controlEngine(): void {
    console.log(
      '这里是Integrity-178B操作系统， 详情请咨询：https://www.ghs.com/products/safety_critical/integrity-do-178b.html'
    );
  }
}

// GEnx发动机引擎
class GEnx implements Engine {
  operateAPI(): void {
    console.log('GEnx发动机引擎运行');
  }
}

// Trent XWB发动机引擎
class TrentXWB implements Engine {
  operateAPI(): void {
    console.log('Trent XWB发动机引擎运行');
  }
}

// 波音-787飞机厂
class Boeing787 implements AirplaneFactory {
  createOS(): OS {
    return new VxWorks();
  }

  createEngine(): Engine {
    return new GEnx();
  }
}

// 空客-A350飞机厂
class AirbusA350 implements AirplaneFactory {
  createOS(): OS {
    return new Integrity178B();
  }

  createEngine(): Engine {
    return new TrentXWB();
  }
}

// 开始造波音787
const boeing787 = new Boeing787();
const boing787OS = boeing787.createOS();
const boeing787Engine = boeing787.createEngine();
// 波音787启动操作系统
boing787OS.controlEngine();
// 波音787调整引擎推力
boeing787Engine.operateAPI();

// 开始造空客A350
const airbusA350 = new AirbusA350();
const airbusA350OS = airbusA350.createOS();
const airbusA350Engine = airbusA350.createEngine();
// 空客A350启动操作系统
airbusA350OS.controlEngine();
// 空客A350调整引擎推力
airbusA350Engine.operateAPI();
