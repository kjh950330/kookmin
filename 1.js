<html>
    <body>
        <p id="upspeed"></p>
        <p id="speeddown"></p>

        <script>
            var car={
                name: 'sonata'
                speed: 50
                color: 'white'
                speedup: funtion() {
                    retrun this.speed+10
                
            },
            speeddown: funtion(){
                var low=this.speed-10
                retrun low;
            }
        };
        var upspeed=document.getElementById("upspeed");
        upspeed.textContent='속도 증가 :'
        </script>

    </body>
</html>