exports["default"]=function(e){var i=String(e).split("."),s=i[0],c=i[1]||"",l=!i[1],n=s.slice(-1),r=s.slice(-2),t=c.slice(-1),f=c.slice(-2);return l&&1==n&&11!=r||1==t&&11!=f?"one":l&&n>=2&&n<=4&&(r<12||r>14)||t>=2&&t<=4&&(f<12||f>14)?"few":"other"}