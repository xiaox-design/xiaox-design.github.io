import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

export default function Cover() {
  return (
    <div
      className="page-fade noise-bg"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景光晕：右下角暖橙 + 蓝紫过渡 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: `
          radial-gradient(ellipse 900px 700px at 78% 65%, rgba(245, 160, 60, 0.16), transparent 60%),
          radial-gradient(ellipse 700px 600px at 92% 85%, rgba(90, 110, 200, 0.14), transparent 65%),
          #0a0a0a
        `,
      }} />

      {/* 标题卡片：偏左、下沉至画面中下部 */}
      <Link
        to="/about"
        className="cover-card-link"
        style={{
          position: 'absolute',
          left: '9%',
          top: '43%',
          zIndex: 2,
        }}
      >
        <div className="cover-card-float">
          <div className="cover-card" style={{
            padding: '44px 56px 36px',
            cursor: 'pointer',
            minWidth: 420,
            borderRadius: 16,
            background: 'rgba(40, 38, 34, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}>
            <h1 className="font-round" style={{
              fontSize: 76,
              fontWeight: 500,
              letterSpacing: '0.01em',
              color: '#f5a93c',
              lineHeight: 1,
            }}>
              portfolio
            </h1>
            <p className="font-round" style={{
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.55)',
              marginTop: 14,
              textAlign: 'right',
            }}>
              Product Design.
            </p>
          </div>
        </div>
      </Link>

      {/* 左下角页脚 */}
      <div className="footer-text" style={{
        position: 'absolute',
        left: 32,
        bottom: 28,
        zIndex: 2,
      }}>
        肖 湘 &nbsp;/&nbsp; 个人作品集
      </div>

      {/* 右下角邮箱 */}
      <div className="footer-text" style={{
        position: 'absolute',
        right: 32,
        bottom: 26,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
      }}>
        <Mail size={16} strokeWidth={1.5} color="#f5a93c" />
        1418414003@qq.com
      </div>
    </div>
  )
}
