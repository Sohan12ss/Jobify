using Microsoft.AspNetCore.Mvc;
using Properties.model.data;
using Microsoft.EntityFrameworkCore;
using Properties.model;


namespace Controller;
[Route("api/[controller]")]
[ApiController]

public class jobcontroller :ControllerBase
{
  private readonly AppDbContext _context;
  public jobcontroller(AppDbContext context){
    _context=context;
  }
  [HttpGet("{id}")]

public async Task<ActionResult<Job>> Getjob(int id){
    var job = await _context.Jobs.FindAsync(id);

    if(job==null)
      return NotFound("jobs not found");

      return job;
  }
  
  [HttpPost]
  public async Task<ActionResult<Job>> CreateJob(Job Job){
    _context.Jobs.Add(Job);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(Getjob),new{id=Job.Id},Job);
  }
 [HttpPut("{id}")]
 public async Task<ActionResult> UpdateJob(int id,Job Job){
    if(id!=Job.Id)
      return BadRequest("id mismatch");

    var existingJob=await _context.Jobs.FindAsync(id);

    if(existingJob==null)
       return NotFound("job not found");

    existingJob.Title=Job.Title;
    existingJob.Company=Job.Company;
    existingJob.Description=Job.Description;
    existingJob.UserId=Job.UserId;

    await _context.SaveChangesAsync();
    return Ok(existingJob);

 }

 [HttpDelete("{id}")]
 public async Task<IActionResult> DeleteJob(int id) {

  var job= await _context.Jobs.FindAsync(id);

  if(job==null)
   return NotFound("Job not found");

   _context.Jobs.Remove(job);

   await _context.SaveChangesAsync();
    

return Ok("job delete successfully");

}
[HttpGet]
public async Task<ActionResult<IEnumerable<Job>>> GetJobs()
{   
    return await _context.Jobs.ToListAsync();
}
}