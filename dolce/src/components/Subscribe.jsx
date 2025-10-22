import React from 'react'

const Subscribe = () => {
    
    const brevoFormUrl = "https://404b5500.sibforms.com/serve/MUIFACSDkrb_A-NQsczCIGkEjXqFVS9MBuqs3vKsxRkFrCxUFCohe_5fCZR4VpltbLZYY2Y5qjV72U6Np99CnbJsdqXMCzPmBCmoKaSaKXSaMHV0Hb56YTmyQheykrxQEGIaUNq92zElLqExaq07ZBOTnWrWSPGCtR9m5seuQMM8Wwpkh8IrB2FDSWDbYKRaKD0GvDk3WK9Usyhgfw=="

  return (
    <div className="relative bg-white w-full ">
      <iframe title='Newsletter Signup'
      src={brevoFormUrl} style={{width: "100%", height:"500px", border: "none",borderRadius: "8px"}} loading='lazy' />
    </div>
  )
}

export default Subscribe
