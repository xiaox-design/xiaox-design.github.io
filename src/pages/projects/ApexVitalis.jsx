import { Shield, Wind, Activity, HeartPulse } from 'lucide-react'
import ProjectFooter from '../../components/ProjectFooter'
import useScrollReveal from '../../hooks/useScrollReveal'
import FloatDrag from '../../components/FloatDrag'

import coverScene from '../../assets/apex-v10/cover-snow.png'
import heroExpanded from '../../assets/apex-v10/hero-expanded.png'
import heroFolded from '../../assets/apex-v10/hero-folded.png'
import rescueWide from '../../assets/apex-v10/rescue-wide.png'
import rescueClose from '../../assets/apex-v10/rescue-close.png'
import rescuePanorama from '../../assets/apex-v10/rescue-panorama.png'
import rescueTeam from '../../assets/apex-v10/rescue-team.png'
import coverRescuePerson from '../../assets/apex-v10/cover-rescue-person.png'
import sketchBoard from '../../assets/apex-v10/sketch-board.png'
import prototypeBoard from '../../assets/apex-v10/prototype-board.png'
import structureAnnotated from '../../assets/apex-v10/structure-annotated.png'
import airbagDetail from '../../assets/apex-v10/airbag-detail.png'
import earDetail from '../../assets/apex-v10/ear-detail.png'
import displayDetail from '../../assets/apex-v10/display-detail.png'
import faceDetail from '../../assets/apex-v10/face-detail.png'
import sensorDetail from '../../assets/apex-v10/sensor-detail.png'
import valveDetail from '../../assets/apex-v10/valve-detail.png'
import usage1 from '../../assets/apex-v10/usage-1.png'
import usage2 from '../../assets/apex-v10/usage-2.png'
import usage3 from '../../assets/apex-v10/usage-3.png'
import usage4 from '../../assets/apex-v10/usage-4.png'
import usage5 from '../../assets/apex-v10/usage-5.png'
import threeView from '../../assets/apex-v10/three-view.png'

const issues = [
  ['01', '救援流程复杂', '设备多、步骤长，现场操作容易被时间与环境拖慢。', rescueClose],
  ['02', '低温 · 低氧', '寒冷与缺氧持续作用，转运时间越长，生命风险越难控制。', rescuePanorama],
  ['03', '生命体征难以及时掌握', '信息分散在不同装备中，救援人员需要付出额外判断成本。', rescueTeam],
]

const directions = [
  ['01', '轻量折叠式结构', '减少携带体积，让装备更容易随身进入救援现场。'],
  ['02', '供氧 × 保温 × 防护', '把关键保护功能组织进同一个头部系统，形成连续保障。'],
  ['03', '实时生命体征反馈', '把监测结果直接带回现场，辅助救援人员及时判断状态。'],
]

const features = [
  { icon: Shield, no: '01', en: 'AIRBAG HEAD', title: '气囊头套', copy: 'PVC 气囊形成包覆式头部保护空间，在保温的同时提供支撑与缓冲，并根据头围进行适配。', image: airbagDetail },
  { icon: Wind, no: '02', en: 'OXYGEN EARS', title: '充气耳罩', copy: '弹性耳罩贴合耳部并承载充气单元，与气路相连，为内部持续提供经过净化的空气。', image: earDetail },
  { icon: Activity, no: '03', en: 'VITAL DATA', title: '数据处理中心', copy: '额头区域整合生命体征采集与显示，把关键数据以简洁反馈带回救援人员。', image: displayDetail },
  { icon: HeartPulse, no: '04', en: 'OXYGEN MASK', title: '供氧面罩', copy: '面罩建立稳定的呼吸区域，与气囊头套共同维持连续的供氧与防护状态。', image: faceDetail },
]

const usage = [
  ['01', '从背包侧袋取下产品', '产品可以挂在背包侧面，需要使用时直接取下。', usage1],
  ['02', '解开绑带', '展开折叠状态，释放未充气的头部结构，为佩戴做准备。', usage2],
  ['03', '将产品戴在头上', '先让前侧贴合头部，再调整气囊位置并固定侧面魔术贴。', usage3],
  ['04', '拉下面罩', '向下拉下面罩，让它覆盖口鼻，并使气囊完全包覆头部前侧。', usage4],
  ['05', '等待充气完成', '气囊展开形成稳定保护空间，供氧与监测系统进入持续工作状态。', usage5],
]

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal apex-v10-reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>
}

function Rule({ no, label, dark = false }) {
  return <div className={`apex-v10-rule${dark ? ' dark' : ''}`}><span>{no}</span><i /><b>{label}</b></div>
}

function DragObject({ src, alt, className = '', maxX = 55, maxY = 38, hoverScale = 1.055, duration = 7, delay = 0 }) {
  return (
    <FloatDrag
      className={`apex-v10-drag ${className}`}
      maxX={maxX}
      maxY={maxY}
      hoverScale={hoverScale}
      floatDuration={duration}
      floatDelay={delay}
    >
      <img src={src} alt={alt} draggable="false" />
    </FloatDrag>
  )
}

export default function ApexVitalis() {
  const ref = useScrollReveal()

  return (
    <main id="project-top" ref={ref} className="apex-v10-page">
      <section className="apex-v10-cover">
        <div className="apex-v10-cover-scene-band" aria-hidden="true">
          <img src={coverRescuePerson} alt="高原雪地救援场景：救援人员转运伤员" />
          <div className="apex-v10-cover-scene-mask" />
          <div className="apex-v10-cover-scene-side-fade" />
        </div>
        <div className="apex-v10-cover-grid apex-v10-cover-grid-scene">
          <Reveal className="apex-v10-cover-copy">
            <Rule no="01" label="INDUSTRIAL DESIGN / LIFE SUPPORT" dark />
            <span className="apex-v10-kicker">HIGH-ALTITUDE RESCUE / 4500M+</span>
            <h1>Apex Vitalis</h1>
            <h2>高原雪山遇险者生命体征保障头盔</h2>
            <p>将供氧、保温、防护与生命体征监测整合进一个可折叠、可携带的头部生命保障系统，让救援装备真正服务于关键时刻。</p>
            <div className="apex-v10-pillrow"><span>01 / FOLDABLE</span><span>02 / LIFE SUPPORT</span><span>03 / VITAL MONITORING</span></div>
          </Reveal>
        </div>
        <div className="apex-v10-cover-note">ONE SYSTEM / TWO STATES <span>展开使用 · 折叠收纳</span></div>
      </section>

      <section className="apex-v10-section apex-v10-paper">
        <div className="apex-v10-container">
          <Reveal><Rule no="02" label="PROJECT BACKGROUND / EXISTING PROBLEMS" /></Reveal>
          <div className="apex-v10-split-head">
            <Reveal><h2><span>在极端环境里，</span><span>时间本身就是风险。</span></h2></Reveal>
            <Reveal delay={80}><p>高海拔雪地同时叠加低温、低氧、强风雪与复杂地形。遇险者在等待与转运过程中仍持续暴露于风险之中，因此救援装备需要解决的并不只是“能不能用”，而是“能不能持续工作”。</p></Reveal>
          </div>

          <Reveal className="apex-v10-background-hero" delay={100}>
            <img src={rescueWide} alt="高海拔雪地救援现场" />
            <div className="apex-v10-background-hero-overlay" />
            <div className="apex-v10-background-hero-text"><span>HIGH-ALTITUDE RESCUE / 4500M+</span><strong>救援行动面临持续性的生命风险。</strong></div>
          </Reveal>

          <div className="apex-v10-issue-grid">
            {issues.map(([no, title, copy, image], index) => (
              <Reveal className="apex-v10-issue" delay={130 + index * 70} key={no}>
                <div className="apex-v10-issue-media"><img src={image} alt={title} /><div /></div>
                <div className="apex-v10-issue-copy"><span>{no}</span><h3>{title}</h3><p>{copy}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="apex-v10-issue-outcomes" delay={300}>
            <div><span>01</span><b>设备负重，携带困难</b></div>
            <div><span>02</span><b>设备功能单一，集成度低</b></div>
            <div><span>03</span><b>救援决策缺乏实时依据</b></div>
          </Reveal>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-paper apex-v10-insight">
        <div className="apex-v10-container">
          <Reveal><Rule no="03" label="CORE INSIGHTS / DESIGN DIRECTION" /></Reveal>
          <div className="apex-v10-insight-head">
            <Reveal className="apex-v10-insight-title"><h2><span>三个问题，</span><span>最终汇成三个设计方向。</span></h2></Reveal>
            <Reveal delay={70} className="apex-v10-insight-note"><p>不是增加更多设备，而是重新组织救援逻辑：减少携带负担、整合生命保障功能，并让关键状态及时回到救援现场。</p></Reveal>
          </div>
          <div className="apex-v10-direction-grid">
            {directions.map(([no, title, copy], index) => (
              <Reveal className="apex-v10-direction" delay={100 + index * 80} key={no}>
                <span>{no}</span><h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="apex-v10-direction-foot" delay={250}><span>DESIGN LOGIC</span><strong>减轻携带 → 集成保障 → 实时反馈</strong></Reveal>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-ink">
        <div className="apex-v10-container">
          <Reveal><Rule no="04" label="DESIGN DEVELOPMENT / SKETCH TO PROTOTYPE" dark /></Reveal>
          <div className="apex-v10-story-head">
            <Reveal><h2><span>从功能探讨，</span><span>到外形设计，再到模型验证。</span></h2></Reveal>
            <Reveal delay={70}><p>草图阶段集中讨论结构比例、功能位置与佩戴关系；完成方向收敛后，再用实体草模验证真实尺寸、贴合与操作动作。</p></Reveal>
          </div>

          <Reveal className="apex-v10-sketch-card" delay={100}>
            <div className="apex-v10-card-top"><span>01 / SKETCH SYSTEM</span><small>形态 · 结构 · 功能布局</small></div>
            <div className="apex-v10-sketch-image"><img src={sketchBoard} alt="Apex Vitalis 早期概念草图板" /></div>
            <div className="apex-v10-card-bottom">从防护范围、供氧方式到监测位置，先用草图把系统关系建立起来。</div>
          </Reveal>

          <Reveal className="apex-v10-prototype-card" delay={150}>
            <div className="apex-v10-card-top"><span>02 / PHYSICAL PROTOTYPE</span><small>真实佩戴关系验证</small></div>
            <div className="apex-v10-prototype-image"><img src={prototypeBoard} alt="头部草模与佩戴关系验证过程" /></div>
            <div className="apex-v10-prototype-caption"><strong>草模验证</strong><p>把草图中的结构假设带到真实头部尺寸，验证绑带、面罩与气囊之间的贴合与操作。</p></div>
          </Reveal>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-paper apex-v10-final-form">
        <div className="apex-v10-container">
          <Reveal><Rule no="05" label="FINAL PRODUCT / THE PRODUCT" /></Reveal>

          <div className="apex-v11-final-head">
            <Reveal className="apex-v11-final-title">
              <span className="apex-v10-orange-tag">APEX VITALIS / FINAL</span>
              <h2><span>一套可以展开，也可以</span><span>带走的生命保障系统。</span></h2>
            </Reveal>
            <Reveal className="apex-v11-final-note" delay={70}>
              <p>最终形态把折叠、供氧、防护与监测统一进一个头部系统。展开时建立完整保护空间，收纳时快速回到便携状态。</p>
            </Reveal>
          </div>

          <div className="apex-v11-product-grid">
            <Reveal className="apex-v11-product-info" delay={90}>
              <div className="apex-v11-system-label">ONE SYSTEM / TWO STATES</div>
              <div className="apex-v11-product-points">
                <div><span>01</span><div><strong>轻量折叠式结构</strong><p>不使用时折叠收纳，降低体积，让装备更容易随身进入救援现场。</p></div></div>
                <div><span>02</span><div><strong>供氧 × 保温 × 防护</strong><p>将核心生命保障功能整合到同一头部系统中，减少设备切换。</p></div></div>
                <div><span>03</span><div><strong>实时生命体征反馈</strong><p>将监测结果直接带回现场，让救援人员及时掌握关键状态。</p></div></div>
              </div>
              <div className="apex-v11-state-row"><span>EXPANDED</span><i>完整防护与供氧</i><span>FOLDED</span><i>快速收纳与携带</i></div>
            </Reveal>

            <Reveal className="apex-v11-product-visual" delay={150}>
              <div className="apex-v11-state-visual expanded-state">
                <DragObject src={heroExpanded} alt="Apex Vitalis 最终产品完整展开状态" maxX={42} maxY={30} hoverScale={1.05} duration={7.2} />
                <span>EXPANDED / 展开状态</span>
              </div>
              <div className="apex-v11-state-visual folded-state">
                <DragObject src={heroFolded} alt="Apex Vitalis 折叠收纳状态" maxX={38} maxY={28} hoverScale={1.06} duration={7.8} delay={0.35} />
                <span>FOLDED / 折叠收纳状态</span>
              </div>
              <span className="apex-v11-product-caption">FINAL PRODUCT / TWO STATES</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-ink apex-v10-structure">
        <div className="apex-v10-container">
          <Reveal><Rule no="06" label="STRUCTURE / SYSTEM" dark /></Reveal>
          <div className="apex-v10-structure-head">
            <Reveal><h2><span>将功能围绕一条气路组织起来。</span></h2></Reveal>
          </div>
          <div className="apex-v11-structure-main">
            <Reveal className="apex-v11-structure-copy" delay={70}>
              <span className="apex-v10-orange-tag">AIR PATH / INTERNAL SYSTEM</span>
              <p className="apex-v11-structure-lead">供气从入口进入，通过净化与分配后，分别进入气囊头套与供氧面罩；同时由传感模块同步采集并反馈关键状态，让供氧、防护与监测形成一条连续的工作链。</p>
              <div className="apex-v11-air-list">
                <div><span>01</span><b>进气</b><em>外部供气进入系统</em></div>
                <div><span>02</span><b>净化</b><em>经过分子筛处理</em></div>
                <div><span>03</span><b>分流</b><em>进入气囊与面罩</em></div>
                <div><span>04</span><b>反馈</b><em>同步采集生命状态</em></div>
              </div>
            </Reveal>

            <Reveal className="apex-v11-structure-image" delay={140}>
              <img src={structureAnnotated} alt="Apex Vitalis 内部结构与气路标注" />
            </Reveal>

            <div className="apex-v10-structure-details apex-v11-structure-details">
              <Reveal className="apex-v10-mini-detail">
                <img src={valveDetail} alt="充气阀" />
                <div><span>VALVE</span><strong>充气阀 / 气路入口</strong><p>作为外部供气进入系统的连接节点。</p></div>
              </Reveal>
              <Reveal className="apex-v10-mini-detail" delay={70}>
                <img src={sensorDetail} alt="内部传感器" />
                <div><span>SENSOR</span><strong>传感与反馈</strong><p>把关键状态转化为现场可识别的信息。</p></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-function-section">
        <div className="apex-v10-function-bg"><img src={coverScene} alt="Apex Vitalis 雪地使用场景" /><div /></div>
        <div className="apex-v10-container apex-v10-function-layer">
          <Reveal><Rule no="07" label="FUNCTION DETAILS / LIFE SUPPORT" dark /></Reveal>
          <div className="apex-v10-function-head">
            <Reveal><h2><span>四个关键模块，</span><span>共同完成生命保障。</span></h2></Reveal>
            <Reveal delay={70}><p>从气囊头套、供氧耳罩到生命体征显示和供氧面罩，四个模块各司其职，又被统一组织在同一个工作系统中。</p></Reveal>
          </div>
          <div className="apex-v10-feature-grid">
            {features.map(({ icon: Icon, no, en, title, copy, image }, index) => (
              <Reveal className="apex-v10-feature" delay={100 + index * 70} key={no}>
                <div className="apex-v10-feature-tag"><span>{no} / {en}</span><Icon size={17} strokeWidth={1.6} /></div>
                <div className="apex-v10-feature-image"><img src={image} alt={title} /></div>
                <h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-usage">
        <div className="apex-v10-usage-bg"><img src={coverScene} alt="高原雪地中的 Apex Vitalis" /><div /></div>
        <div className="apex-v10-container apex-v10-usage-layer">
          <Reveal><Rule no="08" label="USAGE / INTERACTION" dark /></Reveal>
          <div className="apex-v10-usage-head">
            <Reveal><h2><span>从取出到启动，</span><span>完成一次连续佩戴。</span></h2></Reveal>
            <Reveal delay={70}><p>五个动作从真实操作顺序展开，让观者看到产品怎样从收纳状态进入完整工作状态。</p></Reveal>
          </div>
          <Reveal className="apex-v10-usage-panel" delay={100}>
            <div className="apex-v10-usage-column">
              {usage.slice(0, 3).map(([step, title, copy, image]) => (
                <article className="apex-v10-step" key={step}><img src={image} alt={title} /><div><span>STEP {step}</span><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
            <div className="apex-v10-usage-column">
              {usage.slice(3).map(([step, title, copy, image]) => (
                <article className="apex-v10-step" key={step}><img src={image} alt={title} /><div><span>STEP {step}</span><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
              <div className="apex-v10-usage-closure"><span>05 STEPS / ONE FLOW</span><b>取出 → 展开 → 佩戴 → 充气 → 工作</b></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-paper apex-v10-dimensions">
        <div className="apex-v10-container">
          <Reveal><Rule no="09" label="THREE-VIEW / DIMENSIONS" /></Reveal>
          <div className="apex-v10-dimension-head">
            <Reveal><h2><span>最后，</span><span>尺寸落回真实的穿戴关系。</span></h2></Reveal>
            <Reveal delay={70}><p>展开与收纳两种状态共同构成产品尺度。三视图用于确认整体高度、宽度以及折叠后的空间占用关系。</p></Reveal>
          </div>
          <Reveal className="apex-v10-threeview" delay={100}><img src={threeView} alt="Apex Vitalis 三视图与尺寸" /><div><span>THREE-VIEW / DIMENSIONS</span><strong>235 × 280 × 365 MM</strong></div></Reveal>
        </div>
      </section>

      <section className="apex-v10-section apex-v10-closing">
        <div className="apex-v10-container">
          <Reveal><Rule no="10" label="DESIGN STATEMENT" dark /></Reveal>
          <div className="apex-v10-close-grid">
            <Reveal className="apex-v10-close-copy"><span className="apex-v10-orange-tag">DESIGN FOR THE CRITICAL MOMENT</span><h2><span>一个可以</span><span>被带走、被折叠</span><span>也被信任的</span><em>生命保障系统。</em></h2><p>Apex Vitalis 从真实救援流程出发，把供氧、保温、防护和生命体征监测组织成一个连续的生命保障系统。产品不是为了增加设备，而是为了在关键时刻减少救援人员的负担。</p></Reveal>
            <Reveal className="apex-v10-close-visual" delay={100}>
              <div className="apex-v10-close-object close-folded"><DragObject src={heroFolded} alt="Apex Vitalis 折叠收纳状态" maxX={34} maxY={24} hoverScale={1.055} duration={7.9} /><span>FOLDED / 折叠收纳</span></div>
              <div className="apex-v10-close-object close-expanded"><DragObject src={heroExpanded} alt="Apex Vitalis 展开状态" maxX={38} maxY={26} hoverScale={1.05} duration={7.4} delay={.2} /><span>EXPANDED / 展开状态</span></div>
              <span className="apex-v10-close-caption">APEX VITALIS / TWO STATES</span>
            </Reveal>
          </div>
          <Reveal className="apex-v10-footer-reveal" delay={180}>
            <ProjectFooter nextTo="/project/moody" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
