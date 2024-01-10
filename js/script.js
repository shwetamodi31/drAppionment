
// var resources= [
//   // {
  //   id: 'a',
  //   title: 'Dr A'
  // }]
//   {
//     id: 'b',
//     title: 'Dr B'
//   },
//   {
//     id: 'c',
//   title: 'Dr c'

//   }
// ];
//  var events=[
  
//     {
//       title: 'mayank',
//       start: '2023-12-29T10:00:00', 
//       end: '2023-12-29T11:00:00', 
//       description:'Lecture1',
//       resourceId:'a'

//     }]
//     {
//       title: 'shweta',
//       start: '2023-12-29T14:00:00', 
//       end: '2023-12-29T15:00:00', 
//       description:'Lecture2',
//       resourceId:'b'

//     },
//     {
//       title: 'yul',
//       start: '2023-12-29T18:00:00', 
//       end: '2023-12-29T19:00:00', 
//       description:'Lecture3',
//       resourceId:'b',
//       backgroundColor: '#ffc2b3'

//     }
    
//   ];

 


var calendarEl = document.getElementById("calender");

var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    //resources: resources,
    //events: events,
    editable:true,
    allDaySlot:false,
    nowIndicator:true,
    eventColor: '#8080ff',
    slotMinTime:"08:00:00",
    slotMaxTime:"20:00:00",
    
  });
  
  calendar.render();
  $("#drSubmit").click(a=>{
    var drId=$("#drId").val();
    var drName=$("#drName").val();
    
    var drObject={
    id:drId,
    title:drName
  }
    clearField1();
drId==""||drName==""?submitError():calendar.addResource(drObject);
    
  });

  $("#pSubmit").click(a=>{
    var patName=$("#patName").val();
    // var patEmlId=$("#patEmlId").val();
    var sTime=$("#sTime").val();
    var eTime=$("#eTime").val();
    var mobile=$("#mobNo").val();
    var selectDr=$("#drIds").val();

    // console.log(patName,sTime,eTime,mobile,selectDr);

    
    var patObject={
      title: patName,
      start: sTime, 
      end: eTime, 
      description:mobile,
      resourceId:selectDr
    }
    console.log(patObject);
    clearField();
    calendar.addEvent(patObject);
    
  });

  function submitError(){
  Swal.fire({
    title: " dr Entery pending?",
    text: "That thing is still around?",
    icon: "question"
  });}

   function clearField()
   {$("#patName").val("");
   $("#patEmlId").val("");
   $("#sTime").val("");
   $("#eTime").val("");
   $("#mobNo").val("");
   $("#drId").val("");
   }
    function clearField1()
    {
      $("#drId").val("");
      $("#drName").val("");
    };

  