function FILTER(courses, search_query) {
   
   if(search_query === '' || search_query === ' ') {
      return courses
   }
   else {
      return courses.filter((course) => 
         course.name.toLowerCase().includes(search_query.toLowerCase()) || course.author.toLowerCase().includes(search_query.toLowerCase())
      )
   }

}

export default FILTER