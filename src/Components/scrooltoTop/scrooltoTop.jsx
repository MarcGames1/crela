import styles from './scrooltoTop.module.css'

const ScroolToTop = () => {




    return (
      <>
        {/* <!-- Scroll to top start --> */}
        <a href="#">
          <div className={styles.scrollTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 800 800"
              version="1.1"
              viewBox="0 0 800 800"
              xmlSpace="preserve"
            >
              <g>
                <path d="M180.3 447c-14.2 14.2-14.2 37.2 0 51.4 14.2 14.2 37.2 14.2 51.4 0L400 330.2l168.2 168.2c14.2 14.2 37.2 14.2 51.4 0 7.1-7.1 10.6-16.4 10.6-25.7s-3.5-18.6-10.7-25.7L425.7 253.1c-6.8-6.8-16.1-10.7-25.7-10.7-9.6 0-18.9 3.8-25.7 10.7L180.3 447z"></path>
                <path d="M0 400c0 220.6 179.4 400 400 400s400-179.4 400-400S620.6 0 400 0 0 179.4 0 400zm727.3 0c0 180.5-146.8 327.3-327.3 327.3S72.7 580.5 72.7 400 219.5 72.7 400 72.7 727.3 219.5 727.3 400z"></path>
              </g>
            </svg>
          </div>
        </a>
        {/* <!-- Scroll to Top End --> */}
      </>
    );
}


export default ScroolToTop