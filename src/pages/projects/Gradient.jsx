import { ArrowRight } from 'lucide-react'
import ProjectFooter from '../../components/ProjectFooter'
import useScrollReveal from '../../hooks/useScrollReveal'
import FloatDrag from '../../components/FloatDrag'

import backgroundCollage from '../../assets/gradient-case/background-collage.png'
import painInversion from '../../assets/gradient-case/pain-inversion.png'
import painCommunication from '../../assets/gradient-case/pain-communication.png'
import painStigma from '../../assets/gradient-case/pain-stigma.png'
import researchPressure from '../../assets/gradient-case/research-pressure.png'
import researchSensing from '../../assets/gradient-case/research-sensing.png'
import researchMagnetic from '../../assets/gradient-case/research-magnetic.png'
import formExploration from '../../assets/gradient-case/form-exploration.png'
import testArduinoSetup from '../../assets/gradient-case/test-arduino-setup.png'
import testArduinoData from '../../assets/gradient-case/test-arduino-data.png'
import testPrototype from '../../assets/gradient-case/test-prototype.png'
import steps from '../../assets/gradient-case/steps.png'
import materialResearch from '../../assets/gradient-case/material-research.png'
import afoBody from '../../assets/gradient-case/afo-body.png'
import heroMain from '../../assets/gradient-case/hero-main.png'
import productComparison from '../../assets/gradient-case/product-comparison.png'
import detachedBase from '../../assets/gradient-case/detached-base.png'
import magneticDetail from '../../assets/gradient-case/magnetic-detail.png'
import threeView from '../../assets/gradient-case/three-view.png'
import indicator from '../../assets/gradient-case/indicator.png'
import velcro from '../../assets/gradient-case/velcro.png'
import soleDetail from '../../assets/gradient-case/sole-detail.png'

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <div className={`reveal gradient-reveal ${className}`} style={{ '--gradient-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionRule({ no, label, light = false }) {
  return (
    <div className={`gradient-rule${light ? ' light' : ''}`}>
      <span>{no}</span>
      <i />
      <b>{label}</b>
    </div>
  )
}

function Image({ src, alt, className = '', contain = false }) {
  return (
    <div className={`gradient-image${contain ? ' contain' : ''} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

const painItems = [
  {
    no: '01',
    title: '足内翻',
    response: '三点压力原理',
    text: '以稳定的矫正路径控制足部姿态，为后续智能监测建立明确的受力基础。',
    image: painInversion,
  },
  {
    no: '02',
    title: '病耻感',
    response: '鞋 × AFO 模块化组合',
    text: '把医疗器械与日常穿着分开思考，再通过磁吸方式重新组合，让矫形产品也能自然地进入日常生活。',
    image: painStigma,
  },
  {
    no: '03',
    title: '沟通障碍',
    response: '智能监测反馈',
    text: '把患儿难以直接表达的步态与足底压力变化转化为可以被记录与观察的数据。',
    image: painCommunication,
  },
]

const researchItems = [
  {
    no: '01 / PRESSURE',
    title: '三点压力矫形原理',
    text: '以三点压力构成稳定的矫正路径，为 AFO 结构与受力分区提供依据。',
    image: researchPressure,
  },
  {
    no: '02 / SENSING',
    title: '柔性材料监测技术',
    text: '柔性材料可以贴合穿戴部位，将传感能力嵌入日常穿戴结构，而不把产品变成笨重设备。',
    image: researchSensing,
  },
  {
    no: '03 / CONNECTION',
    title: '磁吸机械锁扣连接',
    text: '借鉴快装结构的定位与锁定逻辑，让鞋体和 AFO 可以快速连接，并给予明确的连接反馈。',
    image: researchMagnetic,
  },
]

const featureItems = [
  { key: 'AFO', title: '矫形主体', text: '基于三点压力原理的 AFO 结构，提供足部支撑与姿态控制。', image: afoBody },
  { key: 'LINING', title: '柔性内衬', text: '以柔性织物与缓冲层贴合足部，让监测结构更自然地进入穿戴体验。', image: materialResearch },
  { key: 'MAGNET', title: '磁吸连接', text: '通过磁吸定位与机械锁扣，让鞋体和 AFO 快速组合与拆分。', image: magneticDetail },
  { key: 'STATUS', title: '连接指示灯', text: '连接状态通过灯光反馈，帮助家长确认矫形器是否开始工作。', image: indicator },
  { key: 'FIT', title: '魔术贴贴合', text: '快速调节踝部松紧，适应不同脚型与日常穿戴需求。', image: velcro },
  { key: 'SOLE', title: '大底支撑', text: '流线型加厚鞋底承托整体结构，并让产品更接近日常鞋履。', image: soleDetail },
]

export default function Gradient() {
  const ref = useScrollReveal()

  return (
    <main id="project-top" ref={ref} className="gradient-page">
      <section className="gradient-hero">
        <div className="gradient-hero-grid" />
        <div className="gradient-container gradient-hero-inner">
          <Reveal className="gradient-hero-copy">
            <SectionRule no="03" label="INDUSTRIAL DESIGN / WEARABLE ORTHOTICS" />
            <div className="gradient-hero-kicker">SMART AFO FOR EVERYDAY LIFE</div>
            <h1>Gradient</h1>
            <p className="gradient-hero-cn">智能儿童踝足矫形器</p>
            <p className="gradient-hero-lead">
              把矫形器的治疗属性、足底监测能力与日常鞋履体验重新组合。让孩子可以穿着它走出康复空间，也让家长能够看见那些原本难以表达的足部变化。
            </p>
            <div className="gradient-hero-tags">
              <span>01 / CORRECT</span>
              <span>02 / MONITOR</span>
              <span>03 / WEAR</span>
            </div>
          </Reveal>

          <Reveal className="gradient-hero-product" delay={120}>
            <div className="gradient-hero-glow" />
            <FloatDrag maxX={44} maxY={34} hoverScale={1.045} floatDuration={6.6}>
              <img src={heroMain} alt="Gradient 智能儿童 AFO 最终产品" draggable="false" />
            </FloatDrag>
            <div className="gradient-hero-note">
              <span>SMART AFO</span>
              <b>医疗矫形 × 日常穿戴</b>
            </div>
          </Reveal>
        </div>
        <div className="gradient-scroll-cue">SCROLL TO EXPLORE <ArrowRight size={14} /></div>
      </section>

      <section className="gradient-section gradient-background">
        <div className="gradient-container">
          <Reveal><SectionRule no="02" label="PROJECT BACKGROUND" /></Reveal>
          <div className="gradient-background-grid">
            <Reveal className="gradient-background-copy">
              <h2><span>孩子需要的不只是矫正，</span><span>还需要一种愿意每天</span><span>穿上的方式。</span></h2>
              <p>
                脑瘫儿童在长期康复过程中需要佩戴 AFO 来辅助控制足部姿态，但医疗器械往往也带来冰冷、不适以及外观上的心理压力。与此同时，患儿很难持续、准确地表达穿戴后的步态与足部感受。
              </p>
              <div className="gradient-background-stat">
                <span>CONTEXT</span>
                <b>康复空间之外，也要进入真实生活。</b>
              </div>
            </Reveal>
            <Reveal className="gradient-background-media" delay={100}>
              <img src={backgroundCollage} alt="儿童康复与 AFO 使用背景调研" />
              <div className="gradient-media-caption">USER / CONTEXT / DAILY WEAR</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gradient-section gradient-problems">
        <div className="gradient-container">
          <Reveal><SectionRule no="03" label="PROBLEM → OPPORTUNITY" light /></Reveal>
          <div className="gradient-problem-heading">
            <Reveal><h2><span>三个问题，</span><span>最终汇成三个设计方向。</span></h2></Reveal>
            <Reveal delay={80}><p>不是把“智能”单独加进 AFO，而是从矫正、沟通和日常穿戴三个层面一起重构产品。</p></Reveal>
          </div>

          <div className="gradient-problem-list">
            {painItems.map((item, index) => (
              <Reveal key={item.no} className="gradient-problem-row" delay={index * 70}>
                <div className="gradient-problem-number">{item.no}</div>
                <Image src={item.image} alt={item.title} />
                <div className="gradient-problem-copy">
                  <span>{item.title}</span>
                  <h3>{item.response}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="gradient-core-line">
            <span>DESIGN CORE</span>
            <b>让矫形、监测与日常穿戴成为一个完整的系统。</b>
          </div>

          <div className="gradient-research-head">
            <Reveal><h3>THREE DESIGN FOUNDATIONS</h3></Reveal>
            <Reveal delay={70}><p>三个技术与设计基础，分别支撑产品的矫正、监测和连接体验。</p></Reveal>
          </div>

          <div className="gradient-research-grid">
            {researchItems.map((item, index) => (
              <Reveal key={item.no} className="gradient-research-card" delay={index * 80}>
                <div className="gradient-research-image"><img src={item.image} alt={item.title} /></div>
                <div className="gradient-research-copy">
                  <span>{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-section gradient-process">
        <div className="gradient-container">
          <Reveal><SectionRule no="04" label="FORM + TECHNICAL EXPLORATION" /></Reveal>
          <div className="gradient-process-heading">
            <Reveal><h2><span>先找到它应该长什么样，</span><span>再证明它真的能工作。</span></h2></Reveal>
            <Reveal delay={80}>
              <p>
                造型推演负责寻找 AFO 与日常鞋履之间更自然的结合方式；技术验证则用 Arduino、压力传感器与实体草模验证三点压力原理，让“智能监测”落在真实结构上。
              </p>
            </Reveal>
          </div>

          <div className="gradient-process-grid">
            <Reveal className="gradient-form-panel">
              <div className="gradient-panel-top"><span>01 / FORM MODELING</span><b>造型推演</b></div>
              <div className="gradient-form-image"><img src={formExploration} alt="Gradient AFO 造型与方案推演" /></div>
              <p>从结构、轮廓、鞋面比例到最终蓝白软性外壳，逐步收敛出更接近日常鞋履的形式。</p>
            </Reveal>

            <div className="gradient-test-stack">
              {[
                ['02 / ARDUINO + SENSOR', '基础电路与压力采集', testArduinoSetup],
                ['03 / DATA FEEDBACK', '实时压力数据测试', testArduinoData],
                ['04 / PHYSICAL PROTOTYPE', '草模与传感器验证', testPrototype],
              ].map(([label, title, image], index) => (
                <Reveal key={label} className="gradient-test-card" delay={(index + 1) * 70}>
                  <Image src={image} alt={title} />
                  <div className="gradient-test-copy"><span>{label}</span><b>{title}</b></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-section gradient-steps">
        <div className="gradient-container">
          <Reveal><SectionRule no="05" label="HOW IT WORKS / STEPS TO USE" light /></Reveal>
          <div className="gradient-steps-heading">
            <Reveal><h2><span>从穿入 AFO，</span><span>到开始日常活动。</span></h2></Reveal>
            <Reveal delay={80}><p>把穿戴过程设计得足够直观，让孩子和家长都能快速理解每一步。</p></Reveal>
          </div>
          <Reveal className="gradient-steps-visual" delay={100}>
            <img src={steps} alt="Gradient 五步穿戴流程" />
          </Reveal>
          <div className="gradient-steps-caption">
            <span>STEP 01 — 穿入</span>
            <span>STEP 02 — 连接</span>
            <span>STEP 03 — 贴合</span>
            <span>STEP 04 — 确认</span>
            <span>STEP 05 — 行走</span>
          </div>
        </div>
      </section>

      <section className="gradient-section gradient-breakdown">
        <div className="gradient-container">
          <Reveal><SectionRule no="06" label="FINAL PRODUCT / FUNCTION BREAKDOWN" /></Reveal>
          <div className="gradient-breakdown-heading">
            <Reveal><h2>一个 AFO，重新连接矫正、监测与穿戴。</h2></Reveal>
            <Reveal delay={80}><p>最终产品不是单独增加功能，而是让每一个部件都参与到完整的使用体验中。</p></Reveal>
          </div>

          <div className="gradient-breakdown-stage">
            <div className="gradient-breakdown-orbit orbit-left" />
            <div className="gradient-breakdown-orbit orbit-right" />
            <Reveal className="gradient-breakdown-product" delay={100}>
              <img src={productComparison} alt="Gradient AFO 完整形态与拆分结构" />
              <div className="gradient-breakdown-detached"><img src={detachedBase} alt="拆分后的鞋体底座" /><span>DETACH / SHOE BASE</span></div>
              <span>FINAL PRODUCT / EXPLODED + ASSEMBLED VIEW</span>
            </Reveal>

            <div className="gradient-feature-column left">
              {featureItems.slice(0, 3).map((item, index) => (
                <Reveal key={item.key} className="gradient-feature-card" delay={index * 55}>
                  <Image src={item.image} alt={item.title} contain />
                  <div><span>{item.key}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                </Reveal>
              ))}
            </div>
            <div className="gradient-feature-column right">
              {featureItems.slice(3).map((item, index) => (
                <Reveal key={item.key} className="gradient-feature-card" delay={(index + 3) * 55}>
                  <Image src={item.image} alt={item.title} contain />
                  <div><span>{item.key}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="gradient-dimension">
            <Reveal className="gradient-dimension-copy">
              <span>THREE-VIEW / DIMENSION</span>
              <h3>22.5 × 8 × 10 cm</h3>
              <p>以 30 码大小为例，三视图用于确认最终产品尺寸与穿戴比例。</p>
            </Reveal>
            <Reveal className="gradient-dimension-image" delay={80}>
              <img src={threeView} alt="Gradient AFO 三视图与尺寸" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gradient-section gradient-statement">
        <div className="gradient-statement-bg" />
        <div className="gradient-container gradient-statement-grid">
          <Reveal><SectionRule no="07" label="DESIGN STATEMENT" light /></Reveal>
          <Reveal className="gradient-statement-copy" delay={70}>
            <span className="gradient-accent-label">CORRECT / MONITOR / WEAR</span>
            <h2>让矫形器成为<br />孩子愿意走出去的鞋。</h2>
            <p>
              Gradient 以 AFO 为基础，把三点压力矫正、足底状态监测与日常鞋履体验整合到同一个产品系统里。它不只是在“治疗”，也在帮助孩子更自然地回到日常生活。
            </p>
          </Reveal>
          <Reveal className="gradient-statement-product" delay={140}>
            <FloatDrag maxX={46} maxY={32} hoverScale={1.04} floatDuration={6.8} floatDelay={.4}>
              <img src={heroMain} alt="Gradient 最终产品" draggable="false" />
            </FloatDrag>
          </Reveal>
          <Reveal className="gradient-footer-actions" delay={180}>
            <ProjectFooter nextTo="/project/washwell" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
