import React from "react";
import "./audioplayer.scss";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Audioplayer = ({ audio }) => {
  const audioRef = useRef();

  const [timelineValue, setTimelineValue] = useState(0);
  const [status, setStatus] = useState("play");
  const [loop, setLoop] = useState(false);

  const handleClick = (option) => {
    if (option === "play") {
      audioRef.current.play();
      setStatus("play");
    } else if (option === "pause") {
      audioRef.current.pause();
      setStatus("pause");
    } else if ("stop") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setStatus("stop");
    }
  };
  const timeLineControler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  useEffect(() => {
    const timeline = document.getElementById("timeline");
    if (audioRef?.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setTimelineValue(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("loadedmetadata", () => {
        timeline.max = audioRef.current.duration;
      });
    }
    return () => {
      if (audioRef?.current) {
        audioRef?.current?.removeEventListener("timeupdate", () => {
          setTimelineValue(audioRef.current.currentTime);
        });
        audioRef?.current?.removeEventListener("loadedmetadata", () => {
          timeline.max = audioRef.current.duration;
        });
      }
    };
  }, [audioRef?.current]);

  const formatTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let minutosFormateados = minutes < 10 ? "0" + minutes : minutes;
    let segundosFormateados = seconds < 10 ? "0" + seconds : seconds;

    return minutosFormateados + ":" + segundosFormateados;
  };

  return (
    <div className="audioplayer">
      <audio
        src={audio}
        autoPlay
        ref={audioRef}
        id="audioTrack"
        // loop={loop}
      />
      <div className="audioplayer__top-container">
        <div className="audioplayer__screen">
          <div className="audioplayer__track-wrapper">
            <span>TRACK</span>
            <span className="audioplayer__counter">1</span>
          </div>
          <div className="audioplayer__counter-wrapper">
            <div className="audioplayer__counter-label">
              <span>MIN</span>
              <span>SEC</span>
            </div>
            <span className="audioplayer__counter">
              {formatTime(Math.floor(timelineValue))}
            </span>
          </div>
          <div className="audioplayer__status-wrapper">
            <div className="audioplayer__status">
              {/* {loop && (
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 52 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.667 12v11.333h24V.666h-24V12Zm0 37.867V69.6l6 5.6c5.733 5.333 6.266 5.466 15.2 5.466 8.4 0 9.733-.4 14.933-4.4 7.467-5.6 14.533-14.933 14.533-19.066 0-3.6-5.466-7.867-8.666-6.667-1.067.4-3.6 3.467-5.734 6.8-3.466 5.867-7.866 8.534-10.8 6.667-.933-.533-1.466-7.2-1.466-17.467V30h-24v19.867Z"
                    fill="#2edf31"
                  />
                </svg>
              )} */}
            </div>
            <div className="audioplayer__status">
              {status === "play" ? (
                <svg
                  fill="#2edf31"
                  width="100%"
                  height="100%"
                  viewBox="-60 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Play</title>
                  <path d="M64 96L328 256 64 416 64 96Z" />
                </svg>
              ) : status === "pause" ? (
                <svg
                  fill="#2edf31"
                  width="100%"
                  height="100%"
                  viewBox="-64 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Pause</title>
                  <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
                </svg>
              ) : (
                <svg
                  width="80%"
                  height="80%"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Stop</title>
                  <path d="M12 3H3V12H12V3Z" fill="#2edf31" />
                </svg>
              )}
            </div>
            <div className="audioplayer__status audioplayer__status--tick">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 7L9.42857 17L6 13"
                  stroke="#2edf31"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="audioplayer__mode">
            <span>MODE</span>
            <div className="audioplayer__mode-data">
              <span>
                <span>44 </span>
                KHz I
              </span>
              <span>
                <span>192 </span>
                kBit/s III
              </span>
            </div>
          </div>
        </div>
        <button
          className="audioplayer__btn audioplayer__btn--right"
          // onClick={() => setLoop(!loop)}
        >
          <svg
            width="60%"
            height="60%"
            viewBox="0 0 1120 980"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.867 1.73321C208.067 2.26655 206.733 3.99988 205.933 5.59988C203.667 9.73322 203.667 710.8 205.8 713.467C206.6 714.533 209.267 715.333 211.667 715.333C215.4 715.333 217.533 713.6 227.667 703.067C234.067 696.267 250.467 679.2 264.2 665.333C277.8 651.333 296.467 632.133 305.667 622.667C314.733 613.067 332.2 595.067 344.333 582.667C356.467 570.133 379.267 546.4 395 530C410.733 513.6 434.2 489.333 447 476.267C476.333 446.133 477.267 445.2 514.333 406.667C531.267 389.2 549.533 370.267 555 364.667C563.533 355.867 575.4 343.467 617.533 299.467C621.4 295.333 634.867 281.467 647.4 268.667C659.933 255.867 680.733 234.533 693.533 221.333C736.067 177.867 743.667 169.067 743.267 164.933C743 162.933 742.2 160.533 741.4 159.733C740.333 158.4 718.867 158 648.2 157.733C587.267 157.467 556.067 156.933 555.133 156C554.2 155.067 556.467 151.6 562.733 145.2C567.667 140.133 581.933 125.2 594.333 112.133C618.333 86.9332 632.067 72.7999 661.533 42.6666C671.533 32.3999 682.067 21.4665 684.867 18.2665C690.867 11.7332 691.533 6.66655 687 3.06655C684.2 0.799881 673.8 0.666548 447.133 0.666548C316.867 0.666548 209.667 1.19988 208.867 1.73321ZM657 17.9999C659 18.7999 660.333 20.1332 660.067 21.1999C659.8 22.2665 649.8 33.3332 637.667 45.5999C625.533 57.9999 605.8 78.3999 593.667 91.1999C581.533 103.867 561.267 124.933 548.733 137.867C530.333 156.533 525.667 162.133 525.667 164.933C525.667 167.2 526.6 169.067 528.2 170C529.933 170.8 561.667 171.333 622.067 171.333C702.333 171.333 713.533 171.6 715 173.333C716.467 175.067 714.2 177.867 700.2 192.267C691.133 201.467 682.733 210 681.667 211.2C680.6 212.533 668.867 224.533 655.667 238.133C635 259.333 611.133 284.4 583.267 313.867C579.267 318 558.6 339.333 537.267 361.2C468.467 431.867 451.8 449.067 439.667 461.867C433 468.8 422.333 480 415.667 486.667C409.133 493.467 399.267 503.6 393.8 509.467C384.867 519.067 346.2 558.933 282.2 624.667C269 638.267 253.133 654.667 246.867 661.333C221.267 688.533 222.067 687.867 220.467 684.8C218.467 681.2 218.467 22.9332 220.333 19.1999C221.8 16.6665 225.533 16.6665 437.667 16.6665C578.733 16.6665 654.733 17.0665 657 17.9999Z"
              fill="black"
            />
            <path
              d="M316.467 122.8C313.933 126.133 313.667 128.133 313.667 150.133C313.667 175.6 314.067 177.067 321 178.8C322.733 179.2 333.8 179.333 345.533 179.067L367 178.667L392.067 153.6C414.467 131.333 417.133 128 416.6 124.933C416.2 122.933 415.267 120.933 414.467 120.4C413.667 119.867 391.933 119.333 366.067 119.333H319.133L316.467 122.8ZM376.333 149.333L361 164.667H344.733H328.333V149.333V134H359.933H391.667L376.333 149.333Z"
              fill="black"
            />
            <path
              d="M317 286.533L313.667 289.867V358.533V427.2L317.133 429.867C319.133 431.467 321.267 432.667 322.067 432.667C323.667 432.667 351.533 404.8 378.467 376.133C389.4 364.4 401.4 351.733 405 348C443.133 308.4 455.8 294.533 456.867 291.733C457.667 289.2 457.4 287.867 455.8 286.267C453.8 284.267 446.867 284 386.867 283.6L320.333 283.2L317 286.533ZM405.533 324.8C392.067 338.8 369.4 362 355.4 376.4L329.667 402.667V350.933V299.333H379.933H430.067L405.533 324.8Z"
              fill="black"
            />
            <path
              d="M727 2.53323C724.333 3.9999 698.333 30.5332 679 51.4666C677.133 53.4666 665.667 65.4666 653.533 78.1332C620.2 112.933 617.667 115.733 617.667 118.8C617.667 120.4 618.6 122.533 619.933 123.467C622.067 125.333 632.2 125.467 804.067 126C809.4 126 808.733 129.467 802.067 136.267C798.6 140 780.733 158.533 762.333 177.467C720.2 221.2 703.133 238.933 691.533 250.8C686.467 256.133 672.2 270.933 659.667 283.867C647.267 296.8 629.533 315.2 620.333 324.533C594.2 351.467 546.867 400.267 540.467 407.067C537.267 410.533 529.133 418.933 522.467 425.867C505.933 442.933 504.2 445.467 505.933 449.333C506.733 451.067 508.733 453.067 510.6 453.867C512.867 454.933 549.267 455.333 636.067 455.333H758.2L780.333 432.933C792.467 420.667 818.867 393.6 839 372.8C859.133 351.867 876.867 333.6 878.333 332.133C879.8 330.533 882.333 327.333 884.067 324.8L887.133 320.267L883.533 316.533L879.933 312.667L859.267 312.4C832.6 311.867 832.2 311.467 845.8 297.733C851.267 292.267 861.533 281.6 868.733 273.867C875.933 266.267 890.067 251.6 900.067 241.333C930.6 210.133 964.733 174.667 1011.67 125.467C1039.8 95.9999 1045.27 90.3999 1085 49.3332C1102.6 31.1999 1117.8 14.9332 1118.73 13.1999C1120.73 9.33323 1119.53 3.73323 1116.33 1.99989C1114.73 1.19989 1044.07 0.666562 922.067 0.666562C762.6 0.799895 729.8 1.06656 727 2.53323ZM1087.13 17.9999C1088.47 18.7999 1089.67 20.1332 1089.67 20.9332C1089.67 21.8666 1082.6 29.7332 1073.93 38.6666C1065.4 47.4666 1046.87 66.6666 1033 81.1999C1019 95.8666 1004.73 110.8 1001 114.667C997.4 118.4 989.533 126.533 983.8 132.8C978.067 138.933 955.533 162.267 933.8 184.667C898.867 220.533 875 245.2 864.333 256.667C849.667 272.133 815.133 308.133 813.267 309.867C811.933 311.067 809.667 314 808.067 316.4C805.267 320.933 805.267 320.933 807.933 324.4C810.6 328 810.6 328 831.267 328.4C861.8 328.933 861.667 327.733 833.267 356.8C820.6 369.733 797.8 393.333 782.333 409.2L754.333 438.133L645.667 437.733C550.333 437.333 537 437.067 536.6 435.333C536.467 434.267 543.933 425.467 553.267 415.867C562.733 406.267 584.467 383.733 601.667 365.867C658.067 307.067 688.733 275.333 702.333 261.467C722.733 240.533 782.067 179.2 810.733 149.467C831.267 128.133 836.333 122.133 836.333 119.2C836.333 110.933 841 111.333 740.6 111.333C686.333 111.333 648.2 110.8 647 110C645.4 109.067 647.133 106.667 655.133 98.3999C660.733 92.6666 667.667 85.3332 670.467 82.1332C673.267 78.9332 681.667 70.1332 689 62.6666C696.333 55.0666 708.733 42.2666 716.733 33.9999C724.6 25.7332 732.733 18.5332 734.733 17.9999C740.2 16.2666 1083.93 16.3999 1087.13 17.9999Z"
              fill="black"
            />
            <path
              d="M914.733 322.4C888.333 348.8 811.4 428.4 792.333 449.067C787.533 454.4 778.866 463.467 773 469.467C767.133 475.333 745.266 497.867 724.333 519.467C703.4 541.067 677.533 567.6 666.866 578.667C656.2 589.6 643.666 602.8 638.866 607.867C634.2 613.067 625.8 621.733 620.333 627.467C614.866 633.067 600.2 648.267 587.666 661.333C575.266 674.4 559.133 691.2 551.933 698.533C526.2 724.933 505.666 746.133 440.333 814C424.6 830.4 408.733 846.933 405 850.667C401.4 854.533 383.4 873.2 365 892.133C346.733 911.067 322.733 935.867 311.8 947.067C293.133 966.4 292.066 967.733 292.866 971.733C293.4 974 294.333 976.533 295.133 977.333C296.6 978.8 462.733 980.133 470.466 978.667C474.6 978 478.2 974.4 536.066 915.333L556.2 894.667L742.866 894C918.066 893.333 929.666 893.2 931.933 891.067C934.066 888.8 934.2 872.8 934.333 605.067C934.466 448.933 933.933 320.267 933.4 319.067C932.733 317.733 930.466 315.867 928.466 314.667C924.6 312.8 924.6 312.8 914.733 322.4ZM918.733 611.2C918.466 757.067 917.8 876.933 917.266 877.6C916.6 878.133 833.533 878.933 732.6 879.333L549 880L517.533 912C500.333 929.6 483 947.467 479.133 951.6C467.533 964.133 473.133 963.333 392.466 963.333H321.8L323.4 959.467C324.333 957.467 338.6 941.733 355.266 924.533C371.8 907.333 387.4 891.2 389.8 888.667C392.2 886.133 401.4 876.533 410.2 867.333C419.133 858.133 439.266 837.2 455 820.8C470.733 804.4 488.333 786.133 494.2 780.133C537.666 735.2 572.2 699.6 575 696.667C604.333 665.333 640.066 628.4 691 576.133C706.866 559.867 725.8 540.4 733 532.667C740.333 524.933 753 511.733 761.266 503.333C769.4 494.933 779.133 484.667 783 480.667C801.266 461.067 865.4 394.533 899.666 359.6C908.733 350.533 914.066 346 916.066 346H919L918.733 611.2Z"
              fill="black"
            />
            <path
              d="M799.533 622C798.067 622.533 794.867 625.333 792.467 628.133C789.933 631.067 769.267 652.533 746.333 676C709.267 714 697.4 726.267 669.267 756C661.133 764.533 659 768.8 661.667 772C663.133 773.733 673.133 774 734.867 774C788.733 774 806.867 773.6 808.067 772.4C810.333 770.133 810.333 624.533 808.067 622.267C806.2 620.4 803.533 620.4 799.533 622ZM793.667 704.667V758H741.4H689.267L692.067 754.933C693.533 753.333 704.733 741.867 717 729.467C729.133 716.933 739 706 739 705.067C739 704.133 739.8 703.333 740.867 703.333C741.933 703.333 744.6 701.067 747 698.267C753.267 690.933 791.533 651.733 792.733 651.467C793.267 651.467 793.667 675.333 793.667 704.667Z"
              fill="black"
            />
            <path
              d="M471.533 481.467C469.133 482.267 463.533 486.8 459 491.467C454.466 496.133 436.6 514.667 419.133 532.667C401.666 550.667 385.533 567.467 383.133 570C380.733 572.533 370.6 583.067 360.6 593.333C335.266 619.333 307.933 647.6 278.333 678.533C264.466 693.067 246.733 711.333 239.133 719.2C206.2 752.933 164.6 796 160.733 800.267C158.333 802.8 145.133 816.667 131.4 830.933C117.666 845.2 101.8 861.6 96.3331 867.333C90.8665 873.067 68.8665 895.6 47.5331 917.467C-2.06686 968.4 0.333138 965.733 0.333138 970.933C0.333138 979.6 -3.13353 979.333 91.7998 979.333H177.4L191.933 964.933C199.8 956.933 212.6 943.867 220.2 935.867C227.8 927.867 254.2 900.667 278.866 875.467C303.533 850.267 323.933 829.2 324.466 828.533C324.866 827.867 332.866 819.333 342.466 809.6C351.933 799.867 372.6 778.533 388.333 762C404.066 745.6 427.533 721.333 440.333 708.133C453.133 694.933 475.666 671.867 490.333 656.8C532.6 613.333 532.6 613.2 537.533 612.267C539.933 611.733 556.6 611.333 574.6 611.333C602.733 611.333 607.533 611.067 610.466 609.067C613.666 607.067 644.333 576.133 667.8 551.333C685.533 532.667 709.933 507.2 716.733 500.4C725 492.133 726.6 487.333 722.466 483.467C719.533 480.667 719.266 480.667 597.666 480.267C511.4 480.133 474.466 480.4 471.533 481.467ZM695 497.333C696.466 499.067 695 501.2 685.533 510.933C673.533 523.333 639.8 558.267 619 579.733C612.066 586.933 604.733 593.733 602.733 594.8C599.933 596.267 591.533 596.667 563.266 596.667H527.533L510.066 614.267C500.466 624 489.133 635.6 484.866 640C480.733 644.4 463.933 661.733 447.666 678.667C431.4 695.467 414.866 712.667 410.866 716.8C391.666 737.067 349.933 780.267 335.266 795.2C326.2 804.4 311.8 819.2 303.266 828C294.733 836.8 279.4 852.667 269.133 863.333C230.6 903.067 187.266 948.133 182.2 953.733C173.133 963.733 177 963.2 99.2665 963.6C23.9331 964 27.2665 964.4 31.3998 957.2C32.3331 955.6 48.0665 938.8 66.4665 919.867C84.8665 900.8 105.933 879.067 113.133 871.467C120.333 863.867 130.866 852.933 136.333 847.333C141.8 841.733 162.2 820.667 181.666 800.533C201.133 780.4 225.4 755.333 235.8 744.667C246.2 734 260.333 719.467 267.133 712.133C286.466 691.867 337.4 638.933 363.666 612C370.333 605.333 382.6 592.667 391 583.867C429.133 544.267 446.066 526.8 459.666 512.533C467.666 504.133 475.533 496.933 477 496.4C478.466 496 527.8 495.6 586.466 495.467C680.866 495.333 693.533 495.6 695 497.333Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="audioplayer__spacer-wrapper">
        <div className="audioplayer__line-space audioplayer__line-space--dark" />
        <div className="audioplayer__line-space audioplayer__line-space--light" />
      </div>
      <div className="audioplayer__controls-container">
        <div className="audioplayer__controls-wrapper">
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("play")}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="-60 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Play</title>
              <path d="M64 96L328 256 64 416 64 96Z" />
            </svg>
          </button>
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("stop")}
          >
            <svg
              width="80%"
              height="80%"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Stop</title>
              <path d="M12 3H3V12H12V3Z" fill="#000000" />
            </svg>
          </button>
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("pause")}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="-64 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Pause</title>
              <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
            </svg>
          </button>
          <button className="audioplayer__btn">
            <svg
              fill="#000000"
              width="120%"
              height="120%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1,1.2246467991473532e-16,1.2246467991473532e-16,1,0,0)"
            >
              <title>Previous Track</title>
              <path d="M6 17L14 12L6 7V17Z" fill="#000000" />
              <path d="M18 7H15V12V17H18V7Z" fill="#000000" />
            </svg>
          </button>
          <button className="audioplayer__btn">
            <svg
              fill="#000000"
              width="120%"
              height="120%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Next Track</title>
              <path d="M6 17L14 12L6 7V17Z" fill="#000000" />
              <path d="M18 7H15V12V17H18V7Z" fill="#000000" />
            </svg>
          </button>
        </div>
        <button className="audioplayer__btn audioplayer__btn--right">
          <div className="audioplayer__btn--upload">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h16v16H0z" />
              <path d="m8 3 8 8H0z" />
            </svg>
            <div className="audioplayer__btn--line" />
          </div>
        </button>
      </div>
      <div className="audioplayer__spacer-wrapper-bottom">
        <div className="audioplayer__line-space audioplayer__line-space--dark" />
        <div className="audioplayer__line-space audioplayer__line-space--light" />
      </div>
      <div className="audioplayer__timeline-wrapper">
        <input
          className="audioplayer__timeline"
          type="range"
          id="timeline"
          value={timelineValue}
          min="0"
          step="0.1"
          onChange={timeLineControler}
        />
      </div>
    </div>
  );
};

export default Audioplayer;
