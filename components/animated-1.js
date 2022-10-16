import React from 'react'

import PropTypes from 'prop-types'

const Animated1 = (props) => {
  return (
    <>
      <div className={`animated-1-container ${props.rootClassName} `}>
        <div className="animated-1-code-embed">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>\r\n<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_lxqurkjc.json" background="transparent" speed="1"\r\n    style="width: 100%; height: 100%;" loop autoplay></lottie-player>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .animated-1-container {
            display: flex;
            position: relative;
          }
          .animated-1-code-embed {
            width: 558px;
            height: 590px;
            padding-left: Infinitypx;
          }
          .animated-1-root-class-name1 {
            position: 0px;
          }
          @media (max-width: 479px) {
            .animated-1-code-embed {
              width: auto;
              height: 508px;
            }
            .animated-1-root-class-name1 {
              left: 44px;
              bottom: -112px;
              position: absolute;
            }
          }
        `}
      </style>
    </>
  )
}

Animated1.defaultProps = {
  rootClassName: '',
}

Animated1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Animated1
