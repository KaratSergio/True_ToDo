using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private static List<TodoTask> tasks = new List<TodoTask>();
        private static int id = 1;

        [HttpGet]
        public ActionResult<IEnumerable<TodoTask>> GetTasks()
        {
            return Ok(tasks);
        }

        [HttpPost]
        public ActionResult<TodoTask> CreateTask([FromBody] TodoTask task)
        {
            if (string.IsNullOrWhiteSpace(task.Text))
            {
                return BadRequest("Text is required.");
            }

            task.Id = id++;
            tasks.Add(task);
            return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null)
            {
                return NotFound();
            }

            tasks.Remove(task);
            return NoContent();
        }

         // for TEST only
        public static void ClearTasks()
        {
            tasks.Clear();
            id = 1; 
        }
    }
}
