<table>
        <tr>
          $if(m.Logo)$
          <td style="width:1%;"><img width="90" height="90" src="$m.Logo$" />
          </td>$endif$
          <td>
            <table>
              $if(m.Organization)$ <tr> <td> $m.Organization$ </td> </tr> $endif$
              $if(m.Institute)$ <tr> <td> $m.Institute$ </td> </tr> $endif$ 
              $if(m.AddressLine1)$ <tr> <td> $m.AddressLine1$ </td> </tr> $endif$
              $if(m.AddressLine2)$ <tr> <td> $m.AddressLine2$ </td> </tr> $endif$ 
              $if(m.City)$ <tr> <td> $m.City$ - $m.PinCode$ </td> </tr> $endif$
            </table>
          </td>
        </tr>
      </table>
  <hr />
  <div align="center" style="font-weight:bold">$m.title$</div>