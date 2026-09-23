import ProjectFooter from '../../components/ProjectFooter'
import useScrollReveal from '../../hooks/useScrollReveal'
import FloatDrag from '../../components/FloatDrag'

import roadContext from '../../assets/washwell-case/01-road-context.png'
import debrisDrain from '../../assets/washwell-case/02-debris-drain.png'
import openDrain from '../../assets/washwell-case/03-open-drain.png'
import cityDrain from '../../assets/washwell-case/04-city-drain.png'
import darkContext from '../../assets/washwell-case/05-dark-context.png'
import painSafe from '../../assets/washwell-case/06-pain-safe.png'
import painSmart from '../../assets/washwell-case/07-pain-smart.png'
import painEfficient from '../../assets/washwell-case/08-pain-efficient.png'
import explorationSketch from '../../assets/washwell-case/09-exploration-sketch.png'
import prototypeA from '../../assets/washwell-case/10-prototype-a.png'
import prototypeB from '../../assets/washwell-case/11-prototype-b.png'
import sideFront from '../../assets/washwell-case/12-side-front.png'
import threeQuarter from '../../assets/washwell-case/13-three-quarter.png'
import sideRear from '../../assets/washwell-case/14-side-rear.png'
import streetScenario from '../../assets/washwell-case/15-street-scenario.png'
import rotationDetail from '../../assets/washwell-case/16-rotation-detail.png'
import garbageTray from '../../assets/washwell-case/17-garbage-tray.png'
import chargingPort from '../../assets/washwell-case/18-charging-port.png'
import waterTank from '../../assets/washwell-case/19-water-tank.png'
import telescopicArm from '../../assets/washwell-case/20-telescopic-arm.png'
import clampDetail from '../../assets/washwell-case/21-clamp-detail.png'
import cleaningHead from '../../assets/washwell-case/22-cleaning-head.png'
import heroThreeQuarter from '../../assets/washwell-case/23-hero-three-quarter.png'
import stepsImage from '../../assets/washwell-case/24-steps.png'
import backgroundResearchBoard from '../../assets/washwell-case/00-background-research-board.png'

const directions = [
  { no: '01', label: 'FRONT', cn: '拾取 / 暂存井盖', desc: '上部工作机构转向车头，配合抓夹完成井盖取放；下部前端提供井盖暂存空间。', image: sideRear },
  { no: '02', label: 'RIGHT', cn: '清理 / 检测井道', desc: '上部工作机构旋转到车辆右侧，伸缩臂向下展开，抓夹、水枪、消杀喷头与摄像头进入井道。', image: threeQuarter },
  { no: '03', label: 'REAR', cn: '转运 / 倾倒垃圾', desc: '作业完成后继续旋转到车尾，将抓取的垃圾转运到后部垃圾箱，实现清洁闭环。', image: sideFront },
]

const lowerFeatures = [
  { title: '垃圾箱', en: 'WASTE BIN', text: '位于车尾，作为清洁垃圾的集中储存空间，并配合上部机构旋转后的抓夹完成投入。', image: garbageTray },
  { title: '充电口', en: 'CHARGING', text: '车身侧面设置充电区域，为设备日常作业提供稳定的能源补给。', image: chargingPort },
  { title: '水箱', en: 'WATER TANK', text: '车体前部设置清洁用水储存空间，中间留出工作机构通过的结构间隙。', image: waterTank },
  { title: '转轴', en: 'ROTATION AXIS', text: '连接上下两部分的核心旋转结构，让上部工作机构围绕车体中心完成多方向切换。', image: rotationDetail },
]

const armFeatures = [
  { title: '伸缩臂', en: 'TELESCOPIC ARM', text: '四段式伸缩机构，承担上下位移，让末端工具能够抵达井盖上方和井道深处。', image: telescopicArm },
  { title: '抓夹', en: 'GRIPPER', text: '夹板间距与角度可调，用于穿过井盖缝隙抓取井盖，也可夹取井底垃圾。', image: clampDetail },
  { title: '清洁系统', en: 'CLEANING HEAD', text: '末端整合摄像头、水枪与消杀喷头：先观察，再抓取、冲洗与消毒。', image: cleaningHead },
]


function Rule({ no, label, light = false }) {
  return (
    <div className={`wash-rule${light ? ' light' : ''}`}>
      <span>{no}</span><i /><b>{label}</b>
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal wash-reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>
}

function Media({ src, alt, className = '', contain = false }) {
  return <div className={`wash-media${contain ? ' contain' : ''} ${className}`}><img src={src} alt={alt} /></div>
}

export default function WashWell() {
  const ref = useScrollReveal()

  return (
    <main id="project-top" ref={ref} className="washwell-page">
      <section className="wash-hero">
        <div className="wash-hero-scene" aria-hidden="true"><img src={streetScenario} alt="" /></div>
        <div className="wash-hero-grid" />
        <div className="wash-hero-orb" />
        <div className="wash-container wash-hero-inner">
          <Reveal className="wash-hero-copy">
            <Rule no="04" label="INDUSTRIAL DESIGN / URBAN MAINTENANCE" light />
            <div className="wash-eyebrow">SMART STREET DRAINAGE SERVICE</div>
            <h1>Wash Well</h1>
            <h2>智能城市街道窨井盖清洁车</h2>
            <p>把抬放井盖、井道清洁、垃圾收集与状态检查集中到一台小型作业车中。上下分体结构让移动、旋转与伸缩成为一套连续的工作系统。</p>
            <div className="wash-hero-tags"><span>01 / THREE DIRECTIONS</span><span>02 / ROTATING WORK UNIT</span><span>03 / CLEANING SYSTEM</span></div>
          </Reveal>
          <Reveal className="wash-hero-visual" delay={120}>
            <FloatDrag maxX={50} maxY={36} hoverScale={1.04} floatDuration={6.8}>
              <img src={heroThreeQuarter} alt="Wash Well 城市窨井清洁车" draggable="false" />
            </FloatDrag>
            <div className="wash-hero-note"><b>ONE BODY / THREE DIRECTIONS</b><span>前方 · 右侧 · 后方</span></div>
          </Reveal>
        </div>
        <div className="wash-scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="wash-section wash-context">
        <div className="wash-container wash-context-board-wrap">
          <Reveal><Rule no="02" label="PROJECT BACKGROUND" /></Reveal>
          <Reveal className="wash-context-board" delay={90}>
            <img src={backgroundResearchBoard} alt="城市街道雨水口背景调研与问题归纳" />
          </Reveal>
          <Reveal className="wash-context-caption" delay={130}>
            <span>BACKGROUND RESEARCH / URBAN DRAINAGE</span>
            <p>从城市雨水管理场景出发，梳理窨井堵塞、运维频率与排水效率之间的关系。</p>
          </Reveal>
        </div>
      </section>

      <section className="wash-section wash-exploration">
        <div className="wash-container">
          <Reveal><Rule no="03" label="DESIGN EXPLORATION" light /></Reveal>
          <div className="wash-section-head light">
            <Reveal><h2 className="wash-exploration-title"><span>从工作方式的设计，</span><span>探索到外观结构的创新。</span></h2></Reveal>
            <Reveal delay={80}><p>先用大量草图探索车体比例、上下载荷关系与工作方向，再用低成本纸板模型验证旋转、伸缩和抓取之间的空间关系。</p></Reveal>
          </div>
          <div className="wash-explore-grid">
            <Reveal className="wash-sketch-card"><Media src={explorationSketch} alt="Wash Well 造型与结构探索草图" contain /><span>01 / FORM + SYSTEM EXPLORATION</span></Reveal>
            <div className="wash-prototype-stack">
              <Reveal delay={80}><Media src={prototypeA} alt="纸板草模验证一" /></Reveal>
              <Reveal delay={140}><Media src={prototypeB} alt="纸板草模验证二" /></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="wash-section wash-directions">
        <div className="wash-container wash-direction-container">
          <Reveal><Rule no="04" label="THREE WORKING DIRECTIONS" /></Reveal>
          <div className="wash-direction-head">
            <Reveal><h2>一个车体，三个工作方向。</h2></Reveal>
            <Reveal delay={70}><p>上部工作机构围绕车辆中心旋转，在前方、右侧与后方建立连续的作业空间。旋转不是装饰，而是整个产品系统成立的核心。</p></Reveal>
          </div>
          <div className="wash-direction-flow">
            {directions.map((item, i) => (
              <Reveal key={item.no} className={`wash-direction-card d${i + 1}`} delay={i * 70}>
                <div className="wash-direction-image"><img src={item.image} alt={item.cn} /></div>
                <div className="wash-direction-meta"><span>{item.no} / {item.label}</span><b>{item.cn}</b></div>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="wash-scenario" delay={100}>
            <img src={streetScenario} alt="Wash Well 在城市道路上作业" />
            <div><span>IN CONTEXT</span><b>停在井盖侧方，避免占据更多道路空间。</b></div>
          </Reveal>
        </div>
      </section>

      <section className="wash-section wash-lower">
        <div className="wash-container">
          <Reveal><Rule no="05" label="LOWER BODY / MOBILE + STORAGE" /></Reveal>
          <div className="wash-system-intro">
            <Reveal><h2 className="wash-lower-title"><span>下部负责移动。</span><span>也负责把工具带到工作现场。</span></h2></Reveal>
            <Reveal delay={80}><p>底盘把垃圾、水和能源整合到同一个可行驶的平台里；上部工作机构则以这里为基座完成旋转与作业。</p></Reveal>
          </div>
          <div className="wash-lower-layout">
            <Reveal className="wash-lower-main" delay={100}><Media src={sideFront} alt="Wash Well 车辆侧面结构" contain /></Reveal>
            <div className="wash-feature-stack">
              {lowerFeatures.map((item, i) => (
                <Reveal key={item.title} delay={120 + i * 50} className="wash-feature-card">
                  <Media src={item.image} alt={item.title} contain />
                  <div><span>{item.en}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wash-section wash-arm">
        <div className="wash-container">
          <Reveal><Rule no="06" label="WORKING ARM / CLEANING SYSTEM" light /></Reveal>
          <div className="wash-arm-head">
            <Reveal><h2>旋转之后，<br />真正进入井道。</h2></Reveal>
            <Reveal delay={80}><p>当工作机构转到车辆右侧，伸缩臂向下展开，末端工具可以进入井底完成抓取、冲洗、消毒和观察。</p></Reveal>
          </div>
          <Reveal className="wash-arm-hero" delay={90}><img src={threeQuarter} alt="Wash Well 右侧工作姿态" /></Reveal>
          <div className="wash-arm-grid">
            {armFeatures.map((item, i) => (
              <Reveal key={item.title} delay={100 + i * 70} className="wash-arm-card">
                <Media src={item.image} alt={item.title} contain />
                <div className="wash-arm-card-copy"><span>{item.en}</span><h3>{item.title}</h3><p>{item.text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="wash-sensor-note" delay={120}><div className="wash-sensor-ring" /><span>SEE / GRIP / CLEAN</span><b>看见井底，再决定下一步动作。</b></Reveal>
        </div>
      </section>

      <section className="wash-section wash-process">
        <div className="wash-container">
          <Reveal><Rule no="07" label="HOW IT WORKS / STEPS TO USE" /></Reveal>
          <div className="wash-process-head">
            <Reveal><h2 className="wash-process-title"><span>从停到走，</span><span>一次清洁形成完整闭环。</span></h2></Reveal>
            <Reveal delay={80}><p>八个步骤把前面所有结构串起来：井盖先被取下，再进入右侧清洁空间，最后回到原位。</p></Reveal>
          </div>
          <Reveal className="wash-steps-art" delay={90}><img src={stepsImage} alt="Wash Well 八步使用流程" /></Reveal>
        </div>
      </section>

      <section className="wash-footer-section">
        <div className="wash-container">
          <Reveal><Rule no="08" label="DESIGN STATEMENT" light /></Reveal>
          <div className="wash-final-grid">
            <Reveal className="wash-final-copy"><span>ONE BODY / THREE DIRECTIONS</span><h2><span>让窨井清洁</span><span>成为一套连续的</span><span>工作系统。</span></h2><p>Wash Well 通过“移动底盘 + 旋转工作单元 + 伸缩末端工具”把抬盖、清洁、检测和垃圾转运整合到同一台城市作业车中。</p></Reveal>
            <Reveal className="wash-final-art" delay={120}>
              <FloatDrag maxX={46} maxY={34} hoverScale={1.04} floatDuration={6.6} floatDelay={.5}>
                <img src={heroThreeQuarter} alt="Wash Well 最终产品" draggable="false" />
              </FloatDrag>
            </Reveal>
          </div>
          <Reveal className="wash-footer-actions" delay={180}>
            <ProjectFooter nextTo="/project/apex-vitalis" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
