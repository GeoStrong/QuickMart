const useCustomSvg = () => {
  const getHomeSvg = (active) => {
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M20.04 7.31969L14.28 3.28969C12.71 2.18969 10.3 2.24969 8.79 3.41969L3.78 7.32969C2.78 8.10969 1.99 9.70969 1.99 10.9697V17.8697C1.99 20.4197 4.06 22.4997 6.61 22.4997H17.39C19.94 22.4997 22.01 20.4297 22.01 17.8797V11.0997C22.01 9.74969 21.14 8.08969 20.04 7.31969ZM12.75 18.4997C12.75 18.9097 12.41 19.2497 12 19.2497C11.59 19.2497 11.25 18.9097 11.25 18.4997V15.4997C11.25 15.0897 11.59 14.7497 12 14.7497C12.41 14.7497 12.75 15.0897 12.75 15.4997V18.4997Z"
            fill="#21D4B4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.79 23.25H6.21C3.47 23.25 1.25 21.02 1.25 18.28V10.87C1.25 9.50997 2.09 7.79997 3.17 6.95997L8.56 2.75997C10.18 1.49997 12.77 1.43997 14.45 2.61997L20.63 6.94997C21.82 7.77997 22.75 9.55997 22.75 11.01V18.29C22.75 21.02 20.53 23.25 17.79 23.25ZM9.48 3.93997L4.09 8.13997C3.38 8.69997 2.75 9.96997 2.75 10.87V18.28C2.75 20.19 4.3 21.75 6.21 21.75H17.79C19.7 21.75 21.25 20.2 21.25 18.29V11.01C21.25 10.05 20.56 8.71997 19.77 8.17997L13.59 3.84997C12.45 3.04997 10.57 3.08997 9.48 3.93997Z"
            fill="#6F7384"
          />
          <path
            d="M12 19.25C11.59 19.25 11.25 18.91 11.25 18.5V15.5C11.25 15.09 11.59 14.75 12 14.75C12.41 14.75 12.75 15.09 12.75 15.5V18.5C12.75 18.91 12.41 19.25 12 19.25Z"
            fill="#6F7384"
          />
        </svg>
      );
    }
  };

  const getCategoriesSvg = (active) => {
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.67 2.5H16.77C14.59 2.5 13.44 3.65 13.44 5.83V7.73C13.44 9.91 14.59 11.06 16.77 11.06H18.67C20.85 11.06 22 9.91 22 7.73V5.83C22 3.65 20.85 2.5 18.67 2.5Z"
            fill="#21D4B4"
          />
          <path
            d="M7.24 13.9297H5.34C3.15 13.9297 2 15.0797 2 17.2597V19.1597C2 21.3497 3.15 22.4997 5.33 22.4997H7.23C9.41 22.4997 10.56 21.3497 10.56 19.1697V17.2697C10.57 15.0797 9.42 13.9297 7.24 13.9297Z"
            fill="#21D4B4"
          />
          <path
            d="M6.29 11.08C8.6593 11.08 10.58 9.1593 10.58 6.79C10.58 4.4207 8.6593 2.5 6.29 2.5C3.9207 2.5 2 4.4207 2 6.79C2 9.1593 3.9207 11.08 6.29 11.08Z"
            fill="#21D4B4"
          />
          <path
            d="M17.71 22.4999C20.0793 22.4999 22 20.5792 22 18.2099C22 15.8406 20.0793 13.9199 17.71 13.9199C15.3407 13.9199 13.42 15.8406 13.42 18.2099C13.42 20.5792 15.3407 22.4999 17.71 22.4999Z"
            fill="#21D4B4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M19.75 11.25H17.75C15.33 11.25 14 9.92 14 7.5V5.5C14 3.08 15.33 1.75 17.75 1.75H19.75C22.17 1.75 23.5 3.08 23.5 5.5V7.5C23.5 9.92 22.17 11.25 19.75 11.25ZM17.75 3.25C16.17 3.25 15.5 3.92 15.5 5.5V7.5C15.5 9.08 16.17 9.75 17.75 9.75H19.75C21.33 9.75 22 9.08 22 7.5V5.5C22 3.92 21.33 3.25 19.75 3.25H17.75Z"
            fill="#6F7384"
          />
          <path
            d="M7.75 23.25H5.75C3.33 23.25 2 21.92 2 19.5V17.5C2 15.08 3.33 13.75 5.75 13.75H7.75C10.17 13.75 11.5 15.08 11.5 17.5V19.5C11.5 21.92 10.17 23.25 7.75 23.25ZM5.75 15.25C4.17 15.25 3.5 15.92 3.5 17.5V19.5C3.5 21.08 4.17 21.75 5.75 21.75H7.75C9.33 21.75 10 21.08 10 19.5V17.5C10 15.92 9.33 15.25 7.75 15.25H5.75Z"
            fill="#6F7384"
          />
          <path
            d="M6.75 11.25C4.13 11.25 2 9.12 2 6.5C2 3.88 4.13 1.75 6.75 1.75C9.37 1.75 11.5 3.88 11.5 6.5C11.5 9.12 9.37 11.25 6.75 11.25ZM6.75 3.25C4.96 3.25 3.5 4.71 3.5 6.5C3.5 8.29 4.96 9.75 6.75 9.75C8.54 9.75 10 8.29 10 6.5C10 4.71 8.54 3.25 6.75 3.25Z"
            fill="#6F7384"
          />
          <path
            d="M18.75 23.25C16.13 23.25 14 21.12 14 18.5C14 15.88 16.13 13.75 18.75 13.75C21.37 13.75 23.5 15.88 23.5 18.5C23.5 21.12 21.37 23.25 18.75 23.25ZM18.75 15.25C16.96 15.25 15.5 16.71 15.5 18.5C15.5 20.29 16.96 21.75 18.75 21.75C20.54 21.75 22 20.29 22 18.5C22 16.71 20.54 15.25 18.75 15.25Z"
            fill="#6F7384"
          />
        </svg>
      );
    }
  };

  const getCartSvg = (color = '#6F7384', active) => {
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16.25 23C17.2165 23 18 22.2165 18 21.25C18 20.2835 17.2165 19.5 16.25 19.5C15.2835 19.5 14.5 20.2835 14.5 21.25C14.5 22.2165 15.2835 23 16.25 23Z"
            fill="#21D4B4"
          />
          <path
            d="M8.25 23C9.2165 23 10 22.2165 10 21.25C10 20.2835 9.2165 19.5 8.25 19.5C7.2835 19.5 6.5 20.2835 6.5 21.25C6.5 22.2165 7.2835 23 8.25 23Z"
            fill="#21D4B4"
          />
          <path
            d="M4.84 4.44L4.64 6.89C4.6 7.36 4.97 7.75 5.44 7.75H20.75C21.17 7.75 21.52 7.43 21.55 7.01C21.68 5.24 20.33 3.8 18.56 3.8H6.27C6.17 3.36 5.97 2.94 5.66 2.59C5.16 2.06 4.46 1.75 3.74 1.75H2C1.59 1.75 1.25 2.09 1.25 2.5C1.25 2.91 1.59 3.25 2 3.25H3.74C4.05 3.25 4.34 3.38 4.55 3.6C4.76 3.83 4.86 4.13 4.84 4.44Z"
            fill="#21D4B4"
          />
          <path
            d="M20.5101 9.25H5.17005C4.75005 9.25 4.41005 9.57 4.37005 9.98L4.01005 14.33C3.87005 16.04 5.21005 17.5 6.92005 17.5H18.0401C19.5401 17.5 20.8601 16.27 20.9701 14.77L21.3001 10.1C21.3401 9.64 20.9801 9.25 20.5101 9.25Z"
            fill="#21D4B4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.19 18.25H7.53999C6.54999 18.25 5.59999 17.83 4.92999 17.1C4.25999 16.37 3.92 15.39 4 14.4L4.83 4.44C4.86 4.13 4.74999 3.83001 4.53999 3.60001C4.32999 3.37001 4.04 3.25 3.73 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H3.74001C4.47001 1.75 5.15999 2.06 5.64999 2.59C5.91999 2.89 6.12 3.24 6.23 3.63H18.72C19.73 3.63 20.66 4.03 21.34 4.75C22.01 5.48 22.35 6.43 22.27 7.44L21.73 14.94C21.62 16.77 20.02 18.25 18.19 18.25ZM6.28 5.12L5.5 14.52C5.45 15.1 5.64 15.65 6.03 16.08C6.42 16.51 6.95999 16.74 7.53999 16.74H18.19C19.23 16.74 20.17 15.86 20.25 14.82L20.79 7.32001C20.83 6.73001 20.64 6.17001 20.25 5.76001C19.86 5.34001 19.32 5.10999 18.73 5.10999H6.28V5.12Z"
            fill={color}
          />
          <path
            d="M16.25 23.25C15.15 23.25 14.25 22.35 14.25 21.25C14.25 20.15 15.15 19.25 16.25 19.25C17.35 19.25 18.25 20.15 18.25 21.25C18.25 22.35 17.35 23.25 16.25 23.25ZM16.25 20.75C15.97 20.75 15.75 20.97 15.75 21.25C15.75 21.53 15.97 21.75 16.25 21.75C16.53 21.75 16.75 21.53 16.75 21.25C16.75 20.97 16.53 20.75 16.25 20.75Z"
            fill={color}
          />
          <path
            d="M8.25 23.25C7.15 23.25 6.25 22.35 6.25 21.25C6.25 20.15 7.15 19.25 8.25 19.25C9.35 19.25 10.25 20.15 10.25 21.25C10.25 22.35 9.35 23.25 8.25 23.25ZM8.25 20.75C7.97 20.75 7.75 20.97 7.75 21.25C7.75 21.53 7.97 21.75 8.25 21.75C8.53 21.75 8.75 21.53 8.75 21.25C8.75 20.97 8.53 20.75 8.25 20.75Z"
            fill={color}
          />
          <path
            d="M21 9.25H9C8.59 9.25 8.25 8.91 8.25 8.5C8.25 8.09 8.59 7.75 9 7.75H21C21.41 7.75 21.75 8.09 21.75 8.5C21.75 8.91 21.41 9.25 21 9.25Z"
            fill={color}
          />
        </svg>
      );
    }
  };

  const getWishlistSvg = (color = '#6F7384', active) => {
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M16.69 3.59961C14.88 3.59961 13.26 4.47961 12.25 5.82961C11.24 4.47961 9.62 3.59961 7.81 3.59961C4.74 3.59961 2.25 6.09961 2.25 9.18961C2.25 10.3796 2.44 11.4796 2.77 12.4996C4.35 17.4996 9.22 20.4896 11.63 21.3096C11.97 21.4296 12.53 21.4296 12.87 21.3096C15.28 20.4896 20.15 17.4996 21.73 12.4996C22.06 11.4796 22.25 10.3796 22.25 9.18961C22.25 6.09961 19.76 3.59961 16.69 3.59961Z"
            fill="#21D4B4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 22.1496C11.69 22.1496 11.39 22.1096 11.14 22.0196C7.32 20.7096 1.25 16.0596 1.25 9.18961C1.25 5.68961 4.08 2.84961 7.56 2.84961C9.25 2.84961 10.83 3.50961 12 4.68961C13.17 3.50961 14.75 2.84961 16.44 2.84961C19.92 2.84961 22.75 5.69961 22.75 9.18961C22.75 16.0696 16.68 20.7096 12.86 22.0196C12.61 22.1096 12.31 22.1496 12 22.1496ZM7.56 4.34961C4.91 4.34961 2.75 6.51961 2.75 9.18961C2.75 16.0196 9.32 19.8196 11.63 20.6096C11.81 20.6696 12.2 20.6696 12.38 20.6096C14.68 19.8196 21.26 16.0296 21.26 9.18961C21.26 6.51961 19.1 4.34961 16.45 4.34961C14.93 4.34961 13.52 5.05961 12.61 6.28961C12.33 6.66961 11.69 6.66961 11.41 6.28961C10.48 5.04961 9.08 4.34961 7.56 4.34961Z"
            fill={color}
          />
        </svg>
      );
    }
  };

  const getProfileSvg = (active) => {
    if (active) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 2.5C9.38 2.5 7.25 4.63 7.25 7.25C7.25 9.82 9.26 11.9 11.88 11.99C11.96 11.98 12.04 11.98 12.1 11.99C12.12 11.99 12.13 11.99 12.15 11.99C12.16 11.99 12.16 11.99 12.17 11.99C14.73 11.9 16.74 9.82 16.75 7.25C16.75 4.63 14.62 2.5 12 2.5Z"
            fill="#21D4B4"
          />
          <path
            d="M17.08 14.6509C14.29 12.7909 9.73999 12.7909 6.92999 14.6509C5.65999 15.5009 4.95999 16.6509 4.95999 17.8809C4.95999 19.1109 5.65999 20.2509 6.91999 21.0909C8.31999 22.0309 10.16 22.5009 12 22.5009C13.84 22.5009 15.68 22.0309 17.08 21.0909C18.34 20.2409 19.04 19.1009 19.04 17.8609C19.03 16.6309 18.34 15.4909 17.08 14.6509Z"
            fill="#21D4B4"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M12.6596 12.12C12.6296 12.12 12.6096 12.12 12.5796 12.12C12.5296 12.11 12.4596 12.11 12.3996 12.12C9.49957 12.03 7.30957 9.75 7.30957 6.94C7.30957 4.08 9.63957 1.75 12.4996 1.75C15.3596 1.75 17.6896 4.08 17.6896 6.94C17.6796 9.75 15.4796 12.03 12.6896 12.12C12.6796 12.12 12.6696 12.12 12.6596 12.12ZM12.4996 3.25C10.4696 3.25 8.80957 4.91 8.80957 6.94C8.80957 8.94 10.3696 10.55 12.3596 10.62C12.4096 10.61 12.5496 10.61 12.6796 10.62C14.6396 10.53 16.1796 8.92 16.1896 6.94C16.1896 4.91 14.5296 3.25 12.4996 3.25Z"
            fill="#6F7384"
          />
          <path
            d="M12.6696 23.05C10.7096 23.05 8.73961 22.55 7.24961 21.55C5.85961 20.63 5.09961 19.37 5.09961 18C5.09961 16.63 5.85961 15.36 7.24961 14.43C10.2496 12.44 15.1096 12.44 18.0896 14.43C19.4696 15.35 20.2396 16.61 20.2396 17.98C20.2396 19.35 19.4796 20.62 18.0896 21.55C16.5896 22.55 14.6296 23.05 12.6696 23.05ZM8.07961 15.69C7.11961 16.33 6.59961 17.15 6.59961 18.01C6.59961 18.86 7.12961 19.68 8.07961 20.31C10.5696 21.98 14.7696 21.98 17.2596 20.31C18.2196 19.67 18.7396 18.85 18.7396 17.99C18.7396 17.14 18.2096 16.32 17.2596 15.69C14.7696 14.03 10.5696 14.03 8.07961 15.69Z"
            fill="#6F7384"
          />
        </svg>
      );
    }
  };

  return {
    getHomeSvg,
    getCategoriesSvg,
    getCartSvg,
    getWishlistSvg,
    getProfileSvg,
  };
};
export default useCustomSvg;