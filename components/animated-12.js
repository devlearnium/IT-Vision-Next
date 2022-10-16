import React from 'react'

import PropTypes from 'prop-types'

const Animated12 = (props) => {
  return (
    <>
      <div className={`animated-12-container ${props.rootClassName} `}>
        <div className="animated-12-code-embed">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>\r\n<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_p1qiuawe.json" background="transparent" speed="1"\r\n    style="width: 100%; height: 100%;" loop autoplay></lottie-player>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .animated-12-container {
            display: flex;
            position: relative;
          }
          .animated-12-code-embed {
            width: 558px;
            height: 590px;
            padding-left: Infinitypx;
          }

          @media (max-width: 479px) {
            .animated-12-code-embed {
              width: auto;
              height: 508px;
            }
            .animated-12-root-class-name {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Animated12.defaultProps = {
  rootClassName: '',
}

Animated12.propTypes = {
  rootClassName: PropTypes.string,
}

export default Animated12
