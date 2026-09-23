import { ArrowRight } from 'lucide-react'
import ProjectFooter from '../../components/ProjectFooter'
import useScrollReveal from '../../hooks/useScrollReveal'
import FloatDrag from '../../components/FloatDrag'

import mellowBlue from '../../assets/moody-case/mellow-blue.png'
import mellowBlueHero from '../../assets/moody-case/moody-hero-blue.png'
import maven from '../../assets/moody-case/maven.png'
import mavenHero from '../../assets/moody-case/moody-hero-pink.png'
import mochi from '../../assets/moody-case/mochi-front.png'
import mochiHero from '../../assets/moody-case/moody-hero-yellow.png'
import personalityLine from '../../assets/moody-case/personality-line.png'
import backgroundCollage from '../../assets/moody-case/background-collage.png'
import moduleSketch from '../../assets/moody-case/module-sketch.png'
import prototypeProcess from '../../assets/moody-case/prototype-process.png'
import workshopProcess from '../../assets/moody-case/workshop-process.png'
import mellowBlueFront from '../../assets/moody-case/mellow-blue-front.png'
import moduleShapes from '../../assets/moody-case/module-shapes.png'
import attachmentCloseup from '../../assets/moody-case/attachment-closeup.png'
import bodyFront from '../../assets/moody-case/body-front.png'
import internalStructure from '../../assets/moody-case/internal-structure.png'
import emotionScene from '../../assets/moody-case/emotion-scene-crop.png'
import healthScene from '../../assets/moody-case/health-scene-crop.png'
import scheduleScene from '../../assets/moody-case/schedule-scene.png'

const sections = [
  ['02', 'PROJECT BACKGROUND'],
  ['03', 'DESIGN EXPLORATION'],
  ['04', 'CORE CONCEPT'],
  ['05', 'FUNCTIONS'],
  ['06', 'STRUCTURE'],
  ['07', 'ROLES & SCENARIOS'],
]

function Rule({ no, label, light = false }) {
  return (
    <div className={`moody-v3-rule${light ? ' light' : ''}`}>
      <span>{no}</span><i /><b>{label}</b>
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal moody-v3-reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>
}

function Media({ src, alt, className = '', contain = false }) {
  return <div className={`moody-v3-media${contain ? ' contain' : ''} ${className}`}><img src={src} alt={alt} /></div>
}

function FloatingRobot({ src, alt, variant, delay = 0 }) {
  return (
    <FloatDrag
      className={`moody-v4-robot moody-v4-robot-${variant}`}
      maxX={28}
      maxY={22}
      hoverScale={1.07}
      floatDuration={7.2}
      floatDelay={Number(delay) || 0}
      hitInset={variant === 'maven' ? 9 : 0}
    >
      <div className="moody-v20-robot-motion">
        <img src={src} alt={alt} draggable="false" />
      </div>
    </FloatDrag>
  )
}

export default function Moody() {
  const ref = useScrollReveal()

  return (
    <main id="project-top" ref={ref} className="moody-v3-page">
      <section className="moody-v3-hero">
        <div className="moody-v3-hero-noise" />
        <div className="moody-v3-hero-inner">
          <Reveal className="moody-v3-hero-copy">
            <Rule no="02" label="INDUSTRIAL DESIGN / AI COMPANION" light />
            <h1>MOODY</h1>
            <p className="moody-v3-hero-cn">智能桌面陪伴机器人</p>
            <p className="moody-v3-hero-lead">一款通过更换附件即可切换人格的桌面陪伴机器人。通过硬件形态而不是单纯的软件设定，让“性格”成为用户可以看见、触摸和主动选择的交互。</p>
            <div className="moody-v3-hero-points">
              <span>01 / 可替换人格</span>
              <span>02 / 外观即交互</span>
              <span>03 / 桌面陪伴</span>
            </div>
          </Reveal>

          <Reveal className="moody-v3-hero-visual" delay={120}>
            <div className="moody-v3-orbit orbit-a" />
            <div className="moody-v3-orbit orbit-b" />
            <FloatingRobot src={mellowBlueHero} alt="Mellow 蓝色人格形态" variant="mellow" delay={0} />
            <FloatingRobot src={mavenHero} alt="Maven 粉色人格形态" variant="maven" delay={.9} />
            <FloatingRobot src={mochiHero} alt="Mochi 橙色人格形态" variant="mochi" delay={1.7} />
            <div className="moody-v3-hero-caption"><b>ONE BODY / THREE PERSONALITIES</b><span>同一主体 · 三种人格形态</span></div>
          </Reveal>
        </div>
        <div className="moody-v3-scroll-cue">SCROLL TO EXPLORE <ArrowRight size={14} /></div>
      </section>

      <section className="moody-v3-light moody-v3-bg">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[0][0]} label={sections[0][1]} /></Reveal>
          <div className="moody-v3-bg-grid">
            <Reveal className="moody-v3-bg-copy">
              <h2><span>长期伏案工作的人，</span><span>需要的不只是提醒。</span></h2>
              <p>长期伏案工作 / 学习的人群，面临持续的压力累积与情绪内耗，却缺乏一种即时、可感知的情绪安抚方式。市面现有陪伴产品往往功能相近，但人格单一，外观与交互反馈也缺乏绑定关系。</p>
              <div className="moody-v3-bg-facts">
                <div><strong>01</strong><span>工作压力持续存在</span></div>
                <div><strong>02</strong><span>陪伴方式偏单一</span></div>
                <div><strong>03</strong><span>人格与外观割裂</span></div>
              </div>
            </Reveal>
            <Reveal className="moody-v3-bg-art" delay={100}>
              <img src={workshopProcess} alt="办公环境、情绪压力与传统桌面机器人背景调研" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="moody-v3-dark moody-v3-explore">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[1][0]} label={sections[1][1]} light /></Reveal>
          <div className="moody-v3-explore-heading">
            <Reveal><h2><span>从交互方式出发，</span><span>探索不同造型的可能性。</span></h2></Reveal>
            <Reveal delay={80}><p>先用草图验证主体比例、模块位置与人与机器之间的触摸关系，再用纸板和实体模型验证替换动作，把原本藏在软件里的“人格切换”，转化成可以真正被操作的物理行为。</p></Reveal>
          </div>
          <div className="moody-v3-explore-grid moody-v5-explore-grid">
            <Reveal className="moody-v3-explore-item moody-v5-explore-sketch"><Media src={moduleSketch} alt="模块结构与形态草图" contain /><div className="moody-v3-media-tag">01 / CONCEPT SKETCH</div></Reveal>
            <Reveal className="moody-v3-explore-item moody-v5-explore-prototype" delay={100}><Media src={prototypeProcess} alt="纸板原型与结构验证" /></Reveal>
            <Reveal className="moody-v3-explore-item moody-v5-explore-refined" delay={160}><Media src={backgroundCollage} alt="精细草模与人机验证过程" /></Reveal>
          </div>
          <Reveal className="moody-v3-process-note"><span>PROCESS</span><p>草图 → 纸板结构 → 人机关系验证 → 形式收敛</p></Reveal>
        </div>
      </section>

      <section className="moody-v3-dark moody-v3-concept">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[2][0]} label={sections[2][1]} light /></Reveal>
          <div className="moody-v3-concept-grid">
            <Reveal className="moody-v3-concept-copy">
              <span className="moody-v3-orange-label">THE KEY IDEA</span>
              <h2><span>让人格成为</span><span>可触摸的外观。</span></h2>
              <p>机器人主体保持统一，通过左右两侧可替换附件切换不同形态。附件不只是“装饰”，而是人格的外在表达，同时也是用户可以触摸、拆换和参与的交互入口。</p>
              <div className="moody-v3-concept-list">
                <div><b>FORM</b><span>模块形态直接传递性格特征</span></div>
                <div><b>INTERACTION</b><span>附件成为人与机器人互动的入口</span></div>
                <div><b>MODULARITY</b><span>主体统一，个性自由替换</span></div>
              </div>
            </Reveal>
            <Reveal className="moody-v3-concept-media" delay={100}>
              <Media src={bodyFront} alt="机器人主体" contain />
              <div className="moody-v3-callout one"><span>BODY</span><i /><b>统一主体</b></div>
            </Reveal>
          </div>
          <Reveal className="moody-v3-module-band" delay={100}>
            <div className="moody-v3-module-copy">
              <span>MODULAR KIT / ×3</span>
              <h3>一套主体，三种人格。</h3>
              <p>通过更换左右附件，改变形态比例、动作语义与互动方式。</p>
            </div>
            <Media src={moduleShapes} alt="三组可替换模块轮廓" contain />
            <div className="moody-v3-module-detail">
              <div className="moody-v3-module-caption"><span>MODULE</span><b>可替换附件</b></div>
              <Media src={attachmentCloseup} alt="模块连接结构特写" contain className="module-close" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="moody-v3-light moody-v3-functions">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[3][0]} label={sections[3][1]} /></Reveal>
          <div className="moody-v3-functions-heading">
            <Reveal><h2><span>陪伴、健康、日程，</span><span>都回到桌面这一小块空间。</span></h2></Reveal>
            <Reveal delay={80}><p>在常见桌面机器人功能的基础上，把“主动提醒”与“人格化反馈”结合起来，让它在真正需要介入的时候出现，而不是一直占据注意力。</p></Reveal>
          </div>
          <div className="moody-v3-function-cards">
            <Reveal className="moody-v3-function-card"><Media src={emotionScene} alt="情绪陪伴场景" /><div><span>01 / EMOTIONAL COMPANION</span><h3>情绪陪伴</h3><p>通过人格化外观与情绪反馈，提供更主动、更有角色感的日常回应。</p></div></Reveal>
            <Reveal className="moody-v3-function-card raised" delay={80}><Media src={healthScene} alt="健康管理场景" /><div><span>02 / HEALTH MANAGEMENT</span><h3>健康管理</h3><p>围绕久坐、补水等桌面工作节奏进行提醒，让关怀发生得更自然。</p></div></Reveal>
            <Reveal className="moody-v3-function-card" delay={140}><Media src={scheduleScene} alt="日程辅助场景" /><div><span>03 / SCHEDULE ASSIST</span><h3>日程辅助</h3><p>承担会议、待办和桌面信息提示，成为轻量而持续的桌面助手。</p></div></Reveal>
          </div>
          <Reveal className="moody-v3-function-phrase"><span>ONE DESK / THREE ROLES</span><b>同一台机器人，在不同时间回应不同需求。</b></Reveal>
        </div>
      </section>

      <section className="moody-v3-dark moody-v3-structure">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[4][0]} label={sections[4][1]} light /></Reveal>
          <div className="moody-v3-structure-heading">
            <Reveal><h2><span>一个矩形主体，</span><span>连接感知、运动与模块。</span></h2></Reveal>
            <Reveal delay={80}><p>主体内部集中承载感知、供电、运动和交互部件；两侧模块通过机械连接完成快速替换。结构本身就是人格切换发生的路径。</p></Reveal>
          </div>
          <Reveal className="moody-v3-structure-hero" delay={80}><Media src={internalStructure} alt="Moody 内部结构标注图" contain /></Reveal>
          <Reveal className="moody-v3-swap" delay={120}>
            <div><span>MODULE CHANGE</span><h3>对准卡槽 → 完全推入 → 旋转锁紧</h3><p>用一个简单、明确的物理动作完成角色切换。</p></div>
            <Media src={attachmentCloseup} alt="侧面模块连接结构" contain />
          </Reveal>
        </div>
      </section>

      <section className="moody-v3-dark moody-v3-roles">
        <div className="moody-v3-container">
          <Reveal><Rule no={sections[5][0]} label={sections[5][1]} light /></Reveal>
          <div className="moody-v3-roles-top">
            <Reveal className="moody-v3-roles-heading">
              <h2><span>不同性格，</span><span>不同互动方式。</span></h2>
              <p>三种人格共享一个核心主体，通过附件的形态、色彩与互动语义形成区分。它们既是视觉角色，也是用户在桌面上选择不同陪伴方式的入口。</p>
            </Reveal>
            <Reveal className="moody-v3-roles-line" delay={80}><Media src={personalityLine} alt="三种人格与互动轨迹" contain /></Reveal>
          </div>
          <div className="moody-v3-role-grid">
            <Reveal className="moody-v3-role-card role-mellow"><div className="role-art"><img src={mellowBlueFront} alt="Mellow 蓝色人格" /></div><div className="role-copy"><span>01 / MELLOW</span><h3>Mellow</h3><p>蓝色模块 · 安静、柔和的陪伴形态</p></div></Reveal>
            <Reveal className="moody-v3-role-card role-maven" delay={80}><div className="role-art"><img src={maven} alt="Maven" /></div><div className="role-copy"><span>02 / MAVEN</span><h3>Maven</h3><p>粉色模块 · 更强调交流感与情绪反馈</p></div></Reveal>
            <Reveal className="moody-v3-role-card role-mochi" delay={140}><div className="role-art"><img src={mochi} alt="Mochi" /></div><div className="role-copy"><span>03 / MOCHI</span><h3>Mochi</h3><p>橙色模块 · 更活泼的桌面交互形态</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="moody-v3-final">
        <div className="moody-v3-container moody-v3-final-grid">
          <Reveal><Rule no="08" label="DESIGN STATEMENT" /></Reveal>
          <Reveal className="moody-v3-final-art" delay={120}><img src={mellowBlue} alt="Moody 最终形态" /></Reveal>
          <Reveal className="moody-v3-final-copy" delay={80}>
            <h2><span>让机器的“性格”，</span><span>先从外形开始被看见。</span></h2>
            <p>Moody 将人格从软件层面的设定，转化为可替换的外观模块。用户通过一个简单的物理动作参与“变成谁”的过程，让外观真正成为人机关系的一部分。</p>
          </Reveal>
          <Reveal className="moody-v3-final-actions" delay={180}>
            <ProjectFooter nextTo="/project/gradient" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
