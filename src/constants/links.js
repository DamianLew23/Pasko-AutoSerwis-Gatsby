import React from "react"
import { FaChevronRight } from "react-icons/fa"

export default [
    {
        label: "Strona Główna",
        url: "/",
        subPages: []
    },
    {
        label: "Oferta",
        url: "/#nasza-oferta",
        subPages: [
            {
                label: "Wyceny Powypadkowe",
                url: "/oferta/wykonywanie-kosztorysow",
                icon: <FaChevronRight className="icon" />,
            },
            {
                label: "Usługi Lakiernicze",
                url: "/oferta/uslugi-lakiernicze",
                icon: <FaChevronRight className="icon" />,
            },
            {
                label: "Likwidacja Szkody z OC Sprawcy",
                url: "/oferta/likwidacja-szkody-z-oc-sprawcy",
                icon: <FaChevronRight className="icon" />,
            },
        ]
    },
    {
        label: "Kontakt",
        url: "/kontakt",
        subPages: []
    },

]